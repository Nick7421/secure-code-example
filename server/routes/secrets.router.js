const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();

router.get("/", (req, res) => {
  if (req.isAuthenticated()) {
    console.log("req.user:", req.user);
    pool.query(`SELECT * FROM "secret" WHERE${req.user.clearance_level >= 10};`)
      .then(results => res.send(results.rows))
      .catch(error => {
        console.log("error");
        res.sendStatus(403);
      });
  } else {
    //They are not authenticated.
    res.sendStatus(403);
  }
});

module.exports = router;
