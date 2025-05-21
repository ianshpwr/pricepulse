from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Flask backend is working!"

@app.route("/track", methods=["POST"])
def track_price():
    data = request.get_json()

    url = data.get("url")
    target_price = data.get("targetPrice")
    print(f"Received URL: {url}")
    print(f"Target Price: {target_price}")
    return jsonify({"message": "Product tracking info received!"})

if __name__ == "__main__":
    app.run(debug=True)
