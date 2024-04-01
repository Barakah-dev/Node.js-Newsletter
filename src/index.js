const express = require("express");
const app = express();
const path = require("path"); 
const SignUpCollection = require("./mongodb");

const PORT = process.env.PORT || 3000;

// View Engine Setup
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "../view"));

// App Config
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req,res) => {
  res.render("index")
});

app.post("/signup", async (req, res) => {  
  const { firstName, lastName, email } = req.body;

  if (!firstName || !lastName || !email) {
    return res.render("fail");
  }

  try {
    const data = { firstName, lastName, email };
    res.render("success");
    await SignUpCollection.insertMany([data]);
  } catch (error) {
    console.error("Error: ", error);
    res.render('fail');    
  }
});

app.get("/close", (req, res) => {
  console.log("render index");
  return res.render("index");
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});