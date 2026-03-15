const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());   // IMPORTANT LINE

// Show form
app.get("/", (req, res) => {
  res.send(`
    <h2>User Form</h2>
    <form method="POST" action="/submit">
      <label>Name:</label>
      <input type="text" name="name" required /><br><br>

      <label>Password:</label>
      <input type="password" name="password" required /><br><br>

      <button type="submit">Submit</button>
    </form>
  `);
});

// Send data to Flask backend
app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://3.6.88.100:5000/submit", {
      name: req.body.name,
      password: req.body.password
    });

    res.send(`<h3>${response.data.message}</h3>`);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
