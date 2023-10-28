from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def init_app(app):
    db.app = app
    db.init_app(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255))
    email = db.Column(db.String(255), unique=True)
    password = db.Column(db.String(255))

    def user_info(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email
        }


class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True)

    def subscription_info(self):
        return {
            "id": self.id,
            "email": self.email
        }