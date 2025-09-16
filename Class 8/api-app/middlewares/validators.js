const validateUser = (req, res, next) => {
  const { name, city } = req.body;
  const errors = [];
  if (!name) errors.push("Name is required!");
  if (!city) errors.push("City is required!");

  if (errors?.length > 0) {
    return res.status(400).json({
      message: "Valdation Error!",
      errors,
    });
  }
  next();
};

module.exports = {
  validateUser,
};
