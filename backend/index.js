const express = require("express");
const cors = require("cors");
const axios = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"PRIVATE-KEY": "0e96d7e5-c8ef-4a5e-88b2-249ad02e148f"}}
    );
    return res.status(r.status).json(r.data);
  
  
  
});

app.listen(3001);