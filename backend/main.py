from flask import Flask
from flask_cors import CORS
import requests
import os
from dotenv import load_dotenv
from google.cloud import vision
load_dotenv()

app = Flask(__name__)
CORS(app)

detectives = [
        {
            "name": "Watson",
            "image": "https://firebasestorage.googleapis.com/v0/b/who-done-it-298503.appspot.com/o/clouseau.jpeg?alt=media",
            "score": 0,
            "labels": ["Coat", "Collar", "Shirt", "Moustache"]
        },
        {
            "name": "Nancy Drew",
            "image": "https://firebasestorage.googleapis.com/v0/b/who-done-it-298503.appspot.com/o/nancy.png?alt=media",
            "score": 0,
            "labels": ["Plaid", "Sleeve", "Miniskirt", "Belt"]
        },
        {
            "name": "Detective Clouseau",
            "image": "https://firebasestorage.googleapis.com/v0/b/who-done-it-298503.appspot.com/o/clouseau.jpeg?alt=media",
            "score": 0,
            "labels": ["Glove", "Hat", "Tie", "Coat"]
        },
        {
            "name": "Velma Dinkley",
            "image": "https://firebasestorage.googleapis.com/v0/b/who-done-it-298503.appspot.com/o/velma.jpeg?alt=media",
            "score": 0,
            "labels": ["Miniskirt", "Glasses", "Orange", "Red", "Tights"]
        }
    ]

def get_scores(user_image, detective_image):
    r = requests.post(
        "https://api.deepai.org/api/image-similarity",
        data={
            'image1': 'https://firebasestorage.googleapis.com/v0/b/who-done-it-298503.appspot.com/o/' + user_image + '?alt=media',
            'image2': detective_image,
        },
        headers={'api-key': os.getenv("DEEPAI_API")}
    )
    return r.json()['output']['distance']

def get_most_similar(user_image):
    global detectives
    for detective in detectives:
        score = get_scores(user_image, detective['image'])
        detective['score'] = score

    detectives = sorted(detectives, key=lambda i: i['score'])
    most_similar = detectives[0]
    print(most_similar)
    return most_similar

@app.route('/most-similar/<image>')
def print_most_similar(image):
    most_similar = get_most_similar(image)
    return most_similar['name']

@app.route('/analyze/<name>/<image_url>')
def find_objects(name, image_url):
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "who-done-it-298503-a9a988f9f164.json"
    client = vision.ImageAnnotatorClient()
    image = vision.Image()
    image.source.image_uri = 'gs://who-done-it-298503.appspot.com/' + image_url

    image_characteristics = []

    response = client.label_detection(image=image)
    for label in response.label_annotations:
        image_characteristics.append(label.description)

    objects = client.object_localization( image=image).localized_object_annotations
    for object_ in objects:
        image_characteristics.append(object_.name)

    detective = [i for i in detectives if i['name'] == name]
    detective_labels = detective[0]['labels']
    label_exist = []
    label_not_exist = []

    for label in detective_labels:
        if label in image_characteristics:
            label_exist.append(label)
        else:
            label_not_exist.append(label)

    image_objects = {
        "exists": label_exist,
        "wear": label_not_exist
    }

    return image_objects

if __name__ == '__main__':
   app.run()

