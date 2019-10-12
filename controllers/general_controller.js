const db = require('../models/index')
const model = db.general_treatments
exports.index = (req, res, next) => {
  model.findAll().then(users => {
    res.json({ status: 'ok', message: 'success', data: users });
  });
};

exports.show = (req, res, next) => {
  model.findByPk(req.params.id).then(user => {
    res.json({ status: 'ok', message: 'success', data: user });
  });
};

exports.create = (req, res, next) => {
  console.log(req)
  if(!req.body){
    res.json({ status: 'error', message: 'body not defined'});
    return
  } 
  model.create(req.body).then(user => {
    res.json({ status: 'ok', message: 'success', data: user });
  }).catch(err=>{
    res.json({ status: 'error', message: err});
    return err
  });
};

exports.update = (req, res, next) => {
  model.update(req.body, {
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json(data)
  });
};

exports.destroy = (req, res, next) => {
  model.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ status: 'ok', message: 'success', data });
  });
};
