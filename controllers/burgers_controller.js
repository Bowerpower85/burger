const express = require("express");
const burger = require("../models/burger")

// api routes using express router

const router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {

        // console.log(data);
        res.render("index", { burgers: data });
    });
});

router.put("/burgers/:id", function (req, res) {
    // var updateBurger = { burger_name: "" };
    burger.updateOne({ devoured: 1 }, req.params.id, function (data) {
        res.sendStatus(200);
    });
});

router.post("/burgers/insert", function (req, res) {
    console.log(req.body);

    burger.insertOne(req.body, function (data) {
        res.redirect("/");
    });
});


module.exports = router;