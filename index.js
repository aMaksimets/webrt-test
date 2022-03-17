const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
require('dotenv').config()
let rEmail = process.env.Target_Email
let DOMAIN = process.env.Env_Domain

app.use(cors());


const mailgun = require("mailgun-js");
let api_key = process.env.API_KEY

const mg = mailgun({apiKey: api_key, domain: DOMAIN});

const data = {
	from: 'admin@swintelehealth.com',
	to: rEmail,
	subject: 'Thanks for signing up for Swin Telehealth',
	text: 'Telealth app release comming soon!'
};

app.post('/email', (req, res) => {
	mg.messages().send(data, function (error, body) {
		console.log(body);
	});
})


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));