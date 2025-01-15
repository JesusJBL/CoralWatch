from flask import Flask, request, jsonify, send_from_directory
from model import Model
import os
from werkzeug.utils import secure_filename
from flask_cors import CORS
import boto3

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
TEMP_FOLDER = './images'

app = Flask(__name__, static_folder="../client/dist", static_url_path="/")
CORS(app)
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
app.config['TEMP_FOLDER'] = TEMP_FOLDER



def download_model():
    s3 = boto3.client('s3')
    s3.download_file('coralmodelbucket', 'model6.keras', 'model6.keras')

download_model()
model = Model()

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Model output route
@app.route('/predict', methods=["POST"])
def predict():
    if request.method == "POST": 
        file = request.files['file']
        if file.filename == '':
                error = 'No file selected for uploading'
                return jsonify({"error":error}), 400
        
        if file and allowed_file(file.filename):
            try:
                filename = secure_filename(file.filename)
                path = os.path.join(app.config['TEMP_FOLDER'], filename)
                file.save(path)

                prediction = model.predict(path)
                os.remove(path)
                return prediction
            except:
                return jsonify({"error": "Image upload failed"})      
        else:
            error = 'Allowed file types are png, jpg and jpeg'
            return jsonify({"error": error}), 400
    

if __name__ == "__main__":
    app.run(debug=True)