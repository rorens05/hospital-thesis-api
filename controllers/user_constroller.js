const db = require('./../models/index')

exports.index = (req, res, next) => {
  db.User.findAll().then(users => {
    res.json({ status: 'ok', message: 'success', data: users });
  });
};

exports.show = (req, res, next) => {
  db.User.findByPk(req.params.id).then(user => {
    res.json({ status: 'ok', message: 'success', data: user });
  });
};

exports.create = (req, res, next) => {
  console.log(req)
  if(!req.body){
    res.json({ status: 'error', message: 'body not defined'});
    return
  } 
  db.User.create(req.body).then(user => {
    res.json({ status: 'ok', message: 'success', data: user });
  });
};

exports.update = (req, res, next) => {
  db.User.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json(data)
  });
};

exports.destroy = (req, res, next) => {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ status: 'ok', message: 'success', data });
  });
};
