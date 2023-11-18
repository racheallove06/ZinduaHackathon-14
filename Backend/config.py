from flask import Flask
from flask_restful import Api
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgresql://zindua_user:58tsywmDeMrDzWF6XdPYFErrxHDy70AN@dpg-clc6983mot1c73ddg5eg-a.oregon-postgres.render.com/zindua"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.secret_key = 'secret_key'

app.json.compact = False

db = SQLAlchemy()
migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)
