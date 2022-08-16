const createTag = async (req, res) => {
  const { name } = req.body;

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  } 
}

const listTags = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  createTag,
  listTags,
}