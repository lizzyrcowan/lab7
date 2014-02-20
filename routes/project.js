var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;

    models.Project
    .find(projectID)
    .sort('-date')
    .exec(afterQuery);
  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    //console.log(projects);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  //var newProject = new models.Project({
      //"title": String,
      //"date": new Date(Date) ,
      //"summary": String ,
      //"image":String ,

//});
  //newProject.save(afterSaving);

  //function afterSaving(err){
    //if(err){ console.log(err): res.send(500);}
    //res.redirect('/'); //redirect home
  //}


  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  //models.Project
  //.find(projectID)
  //.remove()
  //.exec(afterRemoving);

   //function afterRemoving(err){
    //if(err){console.log(err); }
    //res.send();
  // }
  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}