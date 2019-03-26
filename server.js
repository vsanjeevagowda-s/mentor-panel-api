var express    = require('express');
var app        = express();
const cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

var port = process.env.PORT || 8080;
var router = express.Router();

app.use('/api', router);


router.get('/', (req, res) => {
  res.json({data: "Welcome"});
});

app.listen(port);
console.log('Server started at: localhost:' + port);
