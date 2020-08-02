const model = require('../models');

exports.index = function(req, res, next) {
    
    model.Subject.findAll().then(subjects =>{
        res.json(subjects);
    })
    
  }