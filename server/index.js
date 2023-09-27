const express = require("express");
const app = express();
const cors = require("cors");
const { Pool } = require("pg");

const port = process.env.PORT || 5090;

app.use(cors());
app.use(express.json());
// db.connect;

app.get("/", (req, res) => {
  res.send("Your Backend Service is Running on port 5090");
});

const db = new Pool({
  user: "bekomeigag", // replace with you username
  host: "localhost",
  database: "sign_up",
  password: "",
  port: 5432,
});

app.get("/user", (req, res) => {
  const query = "SELECT * FROM login";
  db.query(query)
    .then((result) => {
      res.status(200).json(result.rows);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/signup", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if ((!name && !email && !password)) {
      res.status(400).json("User is not valid");
    }
      
    const query = `INSERT INTO login (name, email, password)` + `
    VALUES ($1, $2, $3)`;
    const result = await db.query(query, [name, email, password])
      res.status(201).send(result);
  } catch (err) {
      res.status(500).json({ error: err });
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
