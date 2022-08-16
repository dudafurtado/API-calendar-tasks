const createTask = async (req, res) => {
  const { title, description, date, duration, tag } = req.body;

  try {

  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const editTask = async (req, res) => {
  const { title, description, date, duration, tag } = req.body;

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const removeTask = async (req, res) => {
  const { id } = req.params;

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const detailsTask = async (req, res) => {
  const { id } = req.params;

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const searchTask = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

const listTasks = async (req, res) => {
  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  createTask,
  editTask,
  removeTask,
  detailsTask,
  searchTask,
  listTasks,
}