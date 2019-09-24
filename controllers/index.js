import auth from './../middleware/middleware'

export const index = (req, res, next) => {
	auth()
	res.json({ status: 'ok', message: 'success', scratch: 'sample'});
};
