# Backend Server for WatchList Routes By KOSISOCHUKWU ABONE

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode and also connects to MongoDB.\
Open [http://localhost:4000/watchlist](http://localhost:4000/watchlist) to view the GET/ route in your browser and see a list of symbols.
Replace the MongoDB url with yours.

You can also see the list of symbols on the UI when you run the Crypto Coin Tracker React app and navigate to the /watchlist page.

Open Postman app to test the CRUD functionality
GET /watchlist: To view all the symbols present in the watchlist.

POST /watchlist: To add a new symbol to the watchlist.

DELETE /watchlist: To remove the specified symbol in the req.query from the watchlist.
