const jwt = require("jsonwebtoken");

module.exports = {
  encrypt: (data, secret) => {
    return jwt.sign({ data }, secret);
  },
};
