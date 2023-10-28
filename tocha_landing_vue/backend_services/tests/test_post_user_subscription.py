import random
import string

import pytest

from tocha_landing_vue.backend_services.tests.config import UserService


def _generate_email():
    email = ''.join(random.choices(string.ascii_lowercase, k=5)) + random.choice(["@gmail", "@yahoo", "@mail"]) + ".com"
    return email


def test_user_subscription_successful():
    data = {
        "email": _generate_email()
    }
    response = UserService().get_subscription(data=data)

    assert response.status_code == 201


def test_user_subscription_double():
    data = {
        "email": _generate_email()
    }
    response = UserService().get_subscription(data=data)

    assert response.status_code == 201

    response = UserService().get_subscription(data=data)

    assert response.status_code == 400


@pytest.mark.parametrize("email", ["@.com", " @ .de", "@a", "a@.com", "@a."])
def test_user_subscription_wrong_email(email):
    data = {
        "email": email
    }
    response = UserService().get_subscription(data=data)

    assert response.status_code == 400
