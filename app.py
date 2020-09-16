import os
from flask import Flask, render_template, url_for, json

app = Flask(__name__)

# global variable
SITE_ROOT = os.path.realpath(os.path.dirname(__file__))


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/method")
def method():
    return render_template("method.html")


@app.route("/byborough")
def byborough():
    json_url = os.path.join(SITE_ROOT, "static\\data", "borough_total.json")
    data = json.load(open(json_url))
    return render_template("byborough.html", data=data)


@app.route("/byproperty")
def byproperty():
    json_url = os.path.join(SITE_ROOT, "static\\data", "property_total.json")
    data = json.load(open(json_url))
    return render_template("byproperty.html", data=data)


@app.route("/byzipcode")
def byzipcode():
    json_url = os.path.join(SITE_ROOT, "static\\data", "zipcode_total.json")
    data = json.load(open(json_url))
    return render_template("byzipcode.html", data=data)


@app.route("/yearoveryear")
def yearoveryear():
    json_url = os.path.join(SITE_ROOT, "static\\data",
                            "yearoveryear_total.json")
    data = json.load(open(json_url))
    return render_template("yearoveryear.html", data=data)


@app.route("/nycmap")
def nycmap():
    json_url = os.path.join(SITE_ROOT, "static\\data", "combined_zip.json")
    data = json.load(open(json_url))
    return render_template("nycmap.html", data=data)


@app.route("/aboutus")
def aboutus():
    return render_template("aboutus.html")


if __name__ == "__main__":
    app.run(debug=True)
