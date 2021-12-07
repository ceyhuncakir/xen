from flask import Flask, render_template
from flask_fontawesome import FontAwesome
from database.database import Database
import time

app = Flask(__name__,static_url_path='/static')
fa = FontAwesome(app)

@app.route("/")
def home():
    database = Database("localhost", "xen", "root", "")
    servers = database.fetch_data("victims")
    return render_template('home.html', servers=servers)

if __name__ == "__main__":
    app.run(debug=True)
