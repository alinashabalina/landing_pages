import json

import jsonschema
import sqlalchemy
from flask import Flask, jsonify, request
from flask_migrate import Migrate
from sqlalchemy import select

from models import init_app, db, User, Subscription
from schemas import ValidationSchemas

app = Flask(__name__)

app.config['SECRET_KEY'] = "opop"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///./database/user.db'
init_app(app)
migrate = Migrate(app, db)


@app.route("/user/info/<user_id>", methods=["GET"])
def get_user(user_id):
    try:
        user_select = db.session.execute(select(User).filter_by(id=user_id))
        user = next(user_select)[0]
        response = {
            "message": "Info successfully acquired",
            "result": user.user_info()
        }

        return jsonify(response), 200
    except StopIteration:
        response = {
            "message": "Enter a valid user_id",
        }

        return jsonify(response), 400


@app.route("/register", methods=["POST"])
def register_user():
    try:
        user = User()
        user.email = json.loads(request.data)["email"]
        user.name = json.loads(request.data)["name"]
        user.password = json.loads(request.data)["password"]
        db.session.add(user)
        db.session.commit()
        response = {"message": "User created", "result": user.user_info()}
        return jsonify(response), 201
    except sqlalchemy.exc.IntegrityError:
        db.session.rollback()
        result = db.session.execute(select(User).filter_by(email=json.loads(request.data)["email"]))
        response = {
            "message": f"This user already exists in the database with username {next(result)[0].username}",

        }
        return jsonify(response), 400
    except KeyError as e:
        db.session.rollback()
        if len(e.args) != 0:
            response = {
                "message": f"Make sure you have filled the {e.args[0]} field",

            }
        else:
            response = {
                "message": "Oops something went wrong. Check that all the fields are filled",

            }
        return jsonify(response), 400
    except jsonschema.exceptions.SchemaError as e:
        db.session.rollback()
        response = {
            "message": f"Check that all the fields are filled {e.json_path}",

        }
        return jsonify(response), 400
    except jsonschema.exceptions.ValidationError as e:
        db.session.rollback()
        response = {
            "message": f"Validation error: {e.message}",

        }
        return jsonify(response), 400


@app.route("/subscribe", methods=["POST"])
def email_subscription():
    try:
        subscription = Subscription()
        jsonschema.validate(instance=json.loads(request.data), schema=ValidationSchemas.SubscriptionSchema)
        subscription.email = json.loads(request.data)["email"]
        db.session.add(subscription)
        db.session.commit()
        response = {"message": "User created", "result": subscription.subscription_info()}
        return jsonify(response), 201
    except sqlalchemy.exc.IntegrityError:
        db.session.rollback()
        response = {
            "message": "You are already subscribed",

        }
        return jsonify(response), 400
    except KeyError:
        db.session.rollback()
        response = {"message": f"Make sure you have filled the email field"}
        return jsonify(response), 400
    except jsonschema.exceptions.ValidationError as e:
        db.session.rollback()
        response = {
            "message": f"Validation error: {e.message}",

        }
        return jsonify(response), 400
    except jsonschema.exceptions.SchemaError as e:
        db.session.rollback()
        response = {
            "message": f"Validation error: {e.message}",

        }
        return jsonify(response), 400
