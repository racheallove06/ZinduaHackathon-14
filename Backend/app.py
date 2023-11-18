from config import app, db
import bcrypt
from flask import Flask, jsonify, make_response, request, session
from models import User, Farmer, Product
import jwt;
import os ;
import base64;
from datetime import datetime, timedelta;

secret_key = base64.b64encode(os.urandom(24)).decode('utf-8')

@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    if request.method == 'POST':
        existing_username = User.query.filter(User.username == data.get('username')).first()
        existing_email = User.query.filter(User.username == data.get('email')).first()

        if existing_username is None and existing_email is None:
            hashpass = bcrypt.hashpw(data.get('password').encode('utf-8'), bcrypt.gensalt())
            new_user = User(
                username=data.get('username'),
                email=data.get('email'),
                password=hashpass
            )
            db.session.add(new_user)
            db.session.commit()
            return jsonify({'message': 'User created successfully'}), 201

        return jsonify({'error': 'Username/Password already exists!'}), 403

@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Input the required fields'}), 401

    user = User.query.filter(User.email == email).first()

    if user:
        if bcrypt.checkpw(password.encode('utf-8'), user.password):
            expiration_time = datetime.utcnow() + timedelta(hours=400)
            token = jwt.encode({'user_id': user.id, 'exp': expiration_time}, secret_key, algorithm='HS256')

            return jsonify({'message': 'Logged in successfully!', 'token': token}), 200
        
    return jsonify({'error': 'Invalid username/password!'}), 401

@app.route('/farmer/register', methods=['POST'])
def register_farmer():
    data = request.get_json()
    if request.method == 'POST':
        existing_username = Farmer.query.filter(Farmer.username == data.get('username')).first()
        existing_email = Farmer.query.filter(Farmer.username == data.get('email')).first()

        if existing_username is None and existing_email is None:
            hashpass = bcrypt.hashpw(data.get('password').encode('utf-8'), bcrypt.gensalt())
            new_farmer = Farmer(
                username=data.get('username'),
                email=data.get('email'),
                password=hashpass
            )
            db.session.add(new_farmer)
            db.session.commit()
            return jsonify({'message': 'Farmer created successfully'}), 201

        return jsonify({'error': 'Username/Password already exists!'}), 403

@app.route('/farmer/login', methods=['POST'])
def login_farmer():
    data = request.get_json()

    email = data.get('email')
    password = data.get('password')

    if not email or not password:
        return jsonify({'error': 'Input the required fields'}), 401

    farmer = Farmer.query.filter(Farmer.email == email).first()

    if farmer:
        if bcrypt.checkpw(password.encode('utf-8'), farmer.password):
            expiration_time = datetime.utcnow() + timedelta(hours=400)
            token = jwt.encode({'user_id': farmer.id, 'exp': expiration_time}, secret_key, algorithm='HS256')
            session['farmer_id'] = farmer.id

            return jsonify({'message': 'Logged in successfully!', 'token': token}), 200
        
    return jsonify({'error': 'Invalid username/password!'}), 401
    

# Helper function to decode the token
def decode_token(token):
    try:
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return 'Token has expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
    
@app.route('/logout', methods=['DELETE'])
def logout():
    session.pop('farmer_id', None)
    return jsonify({'message': 'Logged out successfully'}), 200

@app.route('/products', methods=['GET', 'POST'])
def products():
    if request.method == 'GET':
        product_list = []
        products = Product.query.all()
        for product in products:
            farmer = Farmer.query.filter(Farmer.id == product.farmer_id).first()
            product_dict = {
                'id': product.id,
                'image_url': product.image_url,
                'location': product.location,
                'quantity': product.quantity,
                'farmer_id': product.farmer_id,
                'farmer_name': farmer.username
            }
            product_list.append(product_dict)
        response_body = product_list
        response = make_response(jsonify(response_body), 200)
        return response
    
    elif request.method == 'POST':
        data = request.form
        if data:
            

            if session.get('farmer_id'):
                farmer = Farmer.query.filter(Farmer.id == session.get('farmer_id')).first()
            else:
                response_body = {"error": "Login as farmer to add product!"}
                response = make_response(response_body)
                return response

            image_url = data.get('image_url')
            location = data.get('location')
            quantity = data.get('quantity')
            farmer_id = farmer.id

            new_product = Product(image_url=image_url, location=location, quantity=quantity, farmer_id=farmer_id)
            db.session.add(new_product)
            db.session.commit()
            response_body = {"message": "Product created successfully!"}
            response = make_response(response_body, 201)

        else:
            response_body = {"error": "Input data!"}
            response = make_response(response_body)

        return response
    
@app.route('/products/<int:id>', methods=['DELETE', 'PATCH'])
def product_by_id(id):
    product = Product.query.filter_by(id=id).first()
    if product:
        if request.method == "DELETE":
            db.session.delete(product)
            db.session.commit()
            response_body = {"message": "Product deleted!"}
            response = make_response(response_body, 200)
            return response
    else:
        response_body = {"error": "Product not found"}
        response = make_response(jsonify(response_body), 404)
        return response
    
if __name__ == '__main__':
    app.run(debug=True)