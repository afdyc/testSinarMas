const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

let testItems = [
  { id: 1, itemName: "kaos kaki" },
  { id: 2, itemName: "kemeja" },
];

app.get("/testItems", (req, res) => {
  res.json(testItems);
});

app.post("/testItems", (req, res) => {
  const { itemName } = req.body;
  if (!itemName) {
    return res.status(400).json({ error: "itemName could not be found" });
  } else {
    const newItem = {
      id: testItems.length + 1,
      itemName,
    };
    //console.log(testItems.length);
    testItems.push(newItem);
    res.status(201).json(newItem);
  }
});

app.delete("/testItems/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  testItems = testItems.filter((item) => item.id !== itemId);
  res.json({ message: "satu item telah dihapus" });
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is running`);
});
