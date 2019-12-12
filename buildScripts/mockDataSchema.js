export const schema = {
    "type": "object",
    "properties": {
        "Users": {
            "type": "array",
            "minItems": 2,
            "maxItems": 5,
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "number",
                        "unique": true,
                        "minimum": 1
                    },
                    "firstName": {
                        "type": "string",
                        "faker": "name.firstName"
                    },
                    "lastName": {
                        "type": "string",
                        "faker": "name.lastName"
                    }
                },
                "required": ["id", "firstName", "lastName"]
            }
        }
    },
    "required": ["Users"]
};