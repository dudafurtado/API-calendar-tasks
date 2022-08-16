const loginUser = async (req, res) => {
  const {} = req.body;
  
  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  loginUser
}