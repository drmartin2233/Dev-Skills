// const skills = [{"JavaScript"},{"CSS"} , {"HTML"}, "NodeJs", "Coffee drinking"];

const skills = [
    {id: 125223, skill: 'JavaScript', have: true},
    {id: 127904, skill: 'Express', have: false},
    {id: 139608, skill: 'HTML', have: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
  };
  
  function deleteOne(id) {
    // All properties attached to req.params are strings!
    id = parseInt(id);
    // Find the index based on the id of the todo object
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    //Add id
    skill.id = Date.now() % 1000000;
    //New todos wouldn't be done :)
    skill.have = false;
    skills.push(skill);
  }

  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }

  function getAll() {
    return skills;
  }
 