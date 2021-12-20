from flask import Flask, render_template
import os
from flask_autoindex import AutoIndex

app = Flask(__name__,static_url_path='/static')


ppath = "exploits" # update your own parent directory here
AutoIndex(app, browse_root=ppath)    

if __name__ == "__main__":
    app.run(debug=True, port=5555)