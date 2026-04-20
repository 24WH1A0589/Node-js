const express = require('express');
const router = express.Router();
const controller = require('../controllers/studentController');

router.get('/students', controller.getStudents);
router.get('/students/:id', controller.getStudent);
router.post('/students', controller.createStudent);
router.put('/students/:id', controller.updateStudent);
router.delete('/students/:id', controller.deleteStudent);

module.exports = router;


Step-10:Paste this code in server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const studentRoutes = require('./routes/studentRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', studentRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
