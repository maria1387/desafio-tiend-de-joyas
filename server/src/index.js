const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const JoyasRouter = require('./routes/joyas.routes')
const app = express();
const pool = require('../src/database/db')
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(JoyasRouter)

app.use((err, req, res, next) => {
	return res.json({
		message:err.message
	})
})


app.listen(8000)
console.log('serve on port 8000')