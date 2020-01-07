const { Mentor } = require('../../../models');
const hmve = require('hmve');

const createMentor = async (req, res) => {
  try {
    const { name, email, subject, mobile } = req.body;
    const mentor = await Mentor.create({ name, email, subject, mobile });
    const message = 'Mentor created successfully!';
    return res.status(200).json({ message, mentor });
  } catch (error) {
    return res.status(422).json({ message: hmve(Todo, error).message });
  }
};

const listMentor = async (req, res) => {

}

const updateMentor = async (req, res) => {

}

const deleteMentor = async (req, res) => {

}

module.exports ={
  createMentor,
  listMentor,
  updateMentor,
  deleteMentor
}