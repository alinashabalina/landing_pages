class ValidationSchemas:
    SubscriptionSchema = {
        "type": "object",
        "properties": {
            "email": {
                "type": "string",
                "pattern": "^\S+@\S+\.\S+$"
            }},
        "required": ["email"],
        "additionalProperties": False,
        }
