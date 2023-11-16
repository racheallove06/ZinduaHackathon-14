from datetime import datetime
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin


from config import db

class User(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable = False)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow)

    @validates('username')
    def validate_username(self, key, value):
        if not value:
            raise ValueError("Username is required")
        return value
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError("Email is required")
        return value
    
    @validates('password')
    def validate_password(self, key, value):
        if not value:
            raise ValueError("Password is required")
        return value
    
class Farmer(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String, nullable=False)
    password = db.Column(db.String, nullable = False)
    created_at = db.Column(db.TIMESTAMP, default=datetime.utcnow)

    # Define one-to-many relationship with products
    products = db.relationship('Product', backref='farmer', lazy=True)

    @validates('username')
    def validate_username(self, key, value):
        if not value:
            raise ValueError("Username is required")
        return value
    
    @validates('email')
    def validate_email(self, key, value):
        if not value:
            raise ValueError("Email is required")
        return value
    
    @validates('password')
    def validate_password(self, key, value):
        if not value:
            raise ValueError("Password is required")
        return value
    
class Product(db.Model, SerializerMixin):
    id = db.Column(db.Integer, primary_key=True)
    image_url = db.Column(db.String)
    location = db.Column(db.String)
    quantity = db.Column(db.Integer)

    # Define many-to-one relationship with farmers
    farmer_id = db.Column(db.Integer, db.ForeignKey('farmer.id'), nullable=False)

    def serialize(self):
        return {
            'id': self.id,
            'image_url': self.image_url,
            'location': self.location,
            'quantity': self.quantity,
            'farmer_id': self.farmer_id
        }