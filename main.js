var app = require('express')();

app.get('/user/:id', function(req, res) {
    let id = req.params.id;
    id = id.replace(/<|>/g, ""); // BAD
    let userHtml = `<div data-id="${id}">${getUserName(id) || "Unknown name"}</div>`;
    // ...
    res.send(prefix + userHtml + suffix);
});

// Ready.
const app = require("express")(),
      pg = require("pg"),
      pool = new pg.Pool(config);

app.get("search", function handler(req, res) {
  // BAD: the category might have SQL special characters in it
  var query1 =
    "SELECT ITEM,PRICE FROM PRODUCT WHERE ITEM_CATEGORY='" +
    req.params.category +
    "' ORDER BY PRICE";
  pool.query(query1, [], function(err, results) {
    // process results
  });
});
