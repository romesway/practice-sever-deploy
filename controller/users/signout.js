module.exports = {
	post: (req, res) => {
		// TODO : 유저가 로그아웃했을 때, session 정보를 없애고, '/'로 redirect할 수 있도록 구현하세요.
		req.session.destroy(); // 세션파기 하는 기능
		res.redirect('/'); // 인자의 루트로 유저를 돌려보냄
	},
};

//should redirect {BASE_URL}/ to signout
