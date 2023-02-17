 const Skill = require('../models/skill');

 module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill
  };
  
  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }
  
  function create(req, res) {
    console.log(req.body);
    //models responsible for CRUD in data
    Skill.create(req.body);
    //Always do  a redirect when data has been changed
    res.redirect('/skills');
  }
  
  function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' });  
  }
  
  
  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: 'Skills Details'
    });
  } 

function index(req, res) {
    console.log('something');
    res.render('skills/index', {
      skills: Skill.getAll(), 
      title: "Dev Skills"
    });
  }
 
  // function create(req, res) {
  //   console.log(req.body);
  //   //models responsible for CRUD in data
  //   Skill.create(req.body);
  //   //Always do  a redirect when data has been changed
  //   res.redirect('/skills');
  // }
  