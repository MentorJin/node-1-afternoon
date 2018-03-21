const express = require("express");
const { json } = require("body-parser");
const app = express();
const port = 3000;
const messageCtrl = require("./controllers/messages_controller");

app.use(json());

app.use(express.static(`${__dirname}../public/build`));

app.get("/api/messages", messageCtrl.Read);
app.post("/api/messages", messageCtrl.Create);
app.put("/api/messages/:id", messageCtrl.Update);
app.delete("/api/messages/:id", messageCtrl.Delete);

app.listen(port, () => console.log(`Listening on ${port}`));
