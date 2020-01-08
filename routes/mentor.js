const mentor = require('../src/api/controllers/mentor');

const mentorRoutes = (app) => {
  app.get('/api/mentors', mentor.listMentor);
  app.post('/api/mentors', mentor.createMentor);
  app.put('/api/mentors/:id', mentor.updateMentor);
  app.delete('/api/mentors/:id', mentor.deleteMentor);
  app.get('/api/mentors/:id', mentor.showMentor);
};

module.exports = mentorRoutes;