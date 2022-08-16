const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  registerUser
}