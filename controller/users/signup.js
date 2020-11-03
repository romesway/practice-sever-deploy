const { users } = require('../../models');

module.exports = {
	post: async (req, res) => {
		const user = await users.findOne({ where: { email: req.body.email } });
		if (user) {
			res.status(409).send('Already exists user');
		} else {
			const newUser = await users.create(req.body);
			res.status(200).send(newUser);
		}
	},
};

// POST /user/signup
//   1) should respond user info to signup data
//   2) should respond conflict with existing user email
