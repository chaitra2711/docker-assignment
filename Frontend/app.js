const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

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

// ✅ FIXED POST ROUTE
app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post(
      "http://my-network-498985873.ap-south-1.elb.amazonaws.com/api/submit",
      {
        name: req.body.name,
        password: req.body.password
      }
    );

    res.send(`<h3>${response.data.message}</h3>`);
  } catch (error) {
    res.send("Error connecting to backend");
  }
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running");
});
