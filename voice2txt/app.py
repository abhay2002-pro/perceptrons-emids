from flask import Flask, jsonify, request
import logging
import werkzeug
from run import main
import soundfile as sf
log = logging.getLogger(__name__)

logging.basicConfig(level=logging.DEBUG)

app = Flask(__name__)



@app.route("/", methods=["POST"])
def get_text():


    # read image file string data
    # filestr = request.files["medicine_image"].read()
    # filestr = request.files['image']
    audiofile = request.files['audio']
    filename = werkzeug.utils.secure_filename(audiofile.filename)
    print("\nReceived image File name : " + audiofile.filename)
    audiofile.save(filename)
    res = main(filename)
    # Run inference tasks here
    return jsonify(
        {
            "input_text": res,
        }
    )

app.run(host="192.168.2.12", port=5000)