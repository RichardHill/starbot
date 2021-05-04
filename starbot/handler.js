"use strict";

const axios = require("axios");

module.exports = async (event, context) => {
  console.log(process.env);

  let res = await axios.get(process.env.query_url);
  let body = `There are currently ${res.data.number} astronauts in space Bruno and Ricardo`;

  if (process.env.add_people) {
    body += " Including ";
    res.data.people.forEach((p) => {
      body += " " + p.name;
    });
  }

  return context
    .status(200)
    .headers({ "Content-type": "application/json" })
    .succeed(body);
};
