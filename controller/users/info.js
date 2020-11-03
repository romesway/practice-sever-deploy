const { users } = require('../../models');

module.exports = {
	get: async (req, res) => {
		const userId = req.session.userId;
		try {
			const user = await users.findOne({ where: { id: userId } });

			res.status(200).send(user);
		} catch (e) {
			res.status(401).send('need user session');
		} finally {
			res.end();
		}
	},
};

// GET /user/info
//   5) should return user data with request of session.userid
//   6) should return Unauthorized if request without session.userid
