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
    const { page } = req.query;
    const mentors = await Mentor.find({}, {}, { skip: (eval(page) - 1) * 10, limit: 10 });
    if(mentors.length === 0) throw new Error('No More Record!');
    return res.status(200).json({ mentors });
  } catch (error) {
    return res.status(422).json({ message: hmve(Mentor, error).message });
  }
}

const updateMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName: full_name, email, about, mobile } = req.body;
    const mentor = await Mentor.findOneAndUpdate({_id: id}, {  full_name, email, about, mobile }, { new: true });
    return res.status(200).json({ message: "Mentor listed successfully", mentor });
  } catch (error) {
    return res.status(422).json({ message: hmve(Mentor, error).message });
  }
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

const showMentor = async (req, res) => {
  try {
    const { id } = req.params;
    const mentor = await Mentor.findOne({ _id: id });
    return res.status(200).json({ message: "Mentor obtained successfully", mentor });
  } catch (error) {
    return res.status(422).json({ message: hmve(Mentor, error).message });
  }
}

module.exports ={
  createMentor,
  listMentor,
  updateMentor,
  deleteMentor,
  showMentor
}