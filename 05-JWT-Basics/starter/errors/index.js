const CustomAPIError = req("./custom-error");
const BadRequestError = req("./bad-request");
const UnauthenticatedError = req("./unauthenticated");

module.exports = {
  CustomAPIError,
  BadRequestError,
  UnauthenticatedError,
};
