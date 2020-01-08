const { Mentor } = require('../../../models');
const hmve = require('hmve');

const createMentor = async (req, res) => {
  try {
    const { fullName: full_name, email, about, mobile } = req.body;
    const mentor = await Mentor.create({ full_name, email, about, mobile });
    const message = 'Mentor created successfully!';
    return res.status(200).json({ message, mentor });
  } catch (error) {
    return res.status(422).json({ message: hmve(Todo, error).message });
  }
};

const listMentor = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    return res.status(200).json({ mentors });
  } catch (error) {
    return res.status(422).json({ message: hmve(Mentor, error).message });
  }
}

const updateMentor = async (req, res) => {

}

const deleteMentor = async (req, res) => {
    try {
      const { id } = req.params;
      const mentors = await Mentor.deleteOne({ _id: id });
      return res.status(200).json({ message: "Mentor Deleted Successfully." });
    } catch (error) {
      return res.status(422).json({ message: hmve(Mentor, error).message });
    }
}

module.exports ={
  createMentor,
  listMentor,
  updateMentor,
  deleteMentor
}