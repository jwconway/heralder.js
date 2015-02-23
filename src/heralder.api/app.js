var restify = require('restify'),
    fs      = require('fs');

var controllers = {}
    , controllers_path = process.cwd() + '/controllers'
fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file)
    }
})

var server = restify.createServer();

server
  .use(restify.fullResponse())
  .use(restify.bodyParser())

//begin groups
server.get("/group", controllers.group.getGroups)
server.get("/group/:id", controllers.group.getGroup)
server.post("/group", controllers.group.createGroup)
server.put("/group/:id", controllers.group.updateGroup)
//end groups

server.listen(50003, function() {
  console.log('%s listening at %s', server.name, server.url);
});