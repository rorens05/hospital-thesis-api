const db = require('./../models/index');
const { success, failed } = require('./../util/response');
const encryption = require('./../util/encryption');
const pry = require('pryjs');
const jwt = require('jsonwebtoken');

exports.login = async (req, res, next) => {
	let { email, password } = req.body;
	let error = false;

	let response = await db.User.findAndCountAll({
		where: {
			email: email || ''
		}
	});

	if (response.count > 0) {
    let user = response.rows[0]
    const passwordMatch = await encryption.decrypt(password, user.password_digest)
    if(passwordMatch){
      let id = user.id;
      let role = user.role;
      var token = jwt.sign({id, role, email}, process.env.JWT_SECRET);
      console.log(jwt.verify(token, process.env.JWT_SECRET))
      success(res, {message: "Login successful", Authorization: "Bearer " + token})
      return 
    }
  }
  failed(res, "email or password is incorrect")
};

exports.register = async (req, res, next) => {
	let { first_name, last_name, username, email, role, password, password_confirmation } = req.body;

	if (!first_name) {
		failed(res, 'First name is required');
		return;
	}

	if (!last_name) {
		failed(res, 'Last name is required');
		return;
	}

	if (!email) {
		failed(res, 'Email is required');
		return;
	}

	if (!password) {
		failed(res, 'Password is required');
		return;
	}

	if (!username) {
		failed(res, 'Username is required');
		return;
  }
  
	if (!role) {
		failed(res, 'Role is required');
		return;
	}

	let response = await db.User.findAndCountAll({
		where: {
			email: email || ''
		}
	});

	if (response.count > 0) {
		failed(res, 'Email has already exist');
		return;
	}

	response = await db.User.findAndCountAll({
		where: {
			username: username || ''
		}
	});

	if (response.count > 0) {
		failed(res, 'Username has already exist');
		return;
	}

	if (password != password_confirmation) {
		failed(res, 'Password and password confirmation does not match');
		return;
	}

	if (!req.body) {
		res.json({ status: 'error', message: 'body not defined' });
		return;
	}

	response = await db.User.create({
		first_name,
		last_name,
		email: email.toLowerCase(),
    username,
    role,
		password_digest: await encryption.encrypt(password)
	});

	success(res, response);
};
