const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createPool({
	host: "localhost",
	user: "root",
	password: "",
	database: "gymapp",
});

app.get("/", (req, res) => {
	res.send("<h2>hi</h2>");
});

app.post("/register", (req, res) => {
	// try {
	// 	const hashedPassword = await bcrypt.hash(req.body.password, 10);
	// } catch {}
	const username = req.body.username;
	const email = req.body.email;
	const password = req.body.password;
	const sqlInsert =
		"INSERT INTO `users` (`id`, `username`, `email`, `password`) VALUES (NULL, ?, ?, ?);";
	db.query(sqlInsert, [username, email, password], (err, result) => {
		console.log(err);
		res.send("good");
	});
});

app.post("/login", async (req, res) => {
	//const
});

app.listen(3001);
console.log("app Started on localhost:3001");
