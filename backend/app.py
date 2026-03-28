from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
       return "Backend V3 SUCCESS"

# ✅ ADD THIS (IMPORTANT)
@app.route("/health")
def health():
    return "OK", 200

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    name = data.get("name")
    password = data.get("password")

    return jsonify({
        "message": f"Data submitted successfully, {name}"
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
