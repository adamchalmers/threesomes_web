from flask import Flask, render_template, url_for, redirect
app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.


@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return render_template("index.html")

@app.route('/favicon.ico')
def favicon():
	return redirect(url_for('static', filename='images/icon.png'))


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404