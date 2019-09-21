exports.index = (req, res, next) => {
	res.json({ status: 'ok', message: 'success', db_name: process.env.DB_HOST });
};
