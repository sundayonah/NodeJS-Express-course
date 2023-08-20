const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");

const secret = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { username, password } = req.body;
  // possible packaged for validation
  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new CustomAPIError(
      "Please and please enter a username and password",
      400
    );
  }

  // just for demo, normally provided  by BD!!!!
  const id = new Date().getDate();

  //try to keeep payload small, better expirience for user
  const token = jwt.sign({ id, username }, secret, { expiresIn: "30d" });

  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
module.exports = {
  login,
  dashboard,
};
