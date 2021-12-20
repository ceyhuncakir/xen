from flask import Flask, render_template
from flask_fontawesome import FontAwesome
from flask_paginate import Pagination, get_page_parameter
from database.database import Database
import time
from flask import request

app = Flask(__name__,static_url_path='/static')
fa = FontAwesome(app)

@app.route("/")
def home():
    page = request.args.get(get_page_parameter(), type=int, default=1)
    limit = 5
    offset = page*limit - limit

    database = Database("localhost", "xen", "root", "")
    data, total = database.fetch_data("victims", limit, offset)

    pagination = Pagination(page=page, per_page=limit, total=total, record_name='servers')

    return render_template('home.html', servers=data, pagination=pagination)

if __name__ == "__main__":
    app.run(debug=True)
