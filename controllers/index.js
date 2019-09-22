const db = require('./../models/index')
const {num} = require('./../util/sample')

exports.index = (req, res, next) => {
	res.json({ status: 'ok', message: 'success', db_name: process.env.NODE_ENV, sample: num});
};
