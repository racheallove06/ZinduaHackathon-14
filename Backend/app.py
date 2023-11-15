from config import app, db
import bcrypt
from flask import Flask, jsonify, make_response, request
from models import User
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
    

# Helper function to decode the token
def decode_token(token):
    try:
        payload = jwt.decode(token, secret_key, algorithms=['HS256'])
        return payload
    except jwt.ExpiredSignatureError:
        return 'Token has expired. Please log in again.'
    except jwt.InvalidTokenError:
        return 'Invalid token. Please log in again.'
    
if __name__ == '__main__':
    app.run(debug=True)