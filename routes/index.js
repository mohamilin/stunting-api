const express = require("express");

const AuthRoutes = require("./auth");
const UserRoutes = require("./users");

const router = express.Router();
router.get('/', (req, res) => {
    // const data = [{name: 'satu', data: 1}, {name: 'dua', data: 2}, {name: 'tiga', data: 3}]
    // res.render('index',{title: "Welcome Stunting REST API", message: "By Amilin", data} )
    res.status(200).json({title: "Welcome Stunting REST API", message: "By Amilin"})
})
router.use("/auth", AuthRoutes);
router.use("/users", UserRoutes);

module.exports = router;
