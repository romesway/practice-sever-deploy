const { users } = require('../../models');

module.exports = {
	post: async (req, res) => {
		const { email, password } = req.body;

		const user = await users.findOne({
			where: { email, password },
		});
		if (user) {
			const userId = user.id;
			req.session.userId = user.id;
			res.send({ id: req.session.userId });
		} else if (!user) {
			res.status(404).send('unvalid user');
		}
		res.end();
	},
};
