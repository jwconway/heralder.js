var Datastore = require('nedb');
var db = new Datastore({ filename: 'bin/data/groups.db', autoload: true });

exports.getGroups = function(req, res, next) {
    db.find({}, function (err, docs) {
        if(err) {
        	console.log(err);
        	res.status(500);
        	res.json({
        		data: "Error occurred - " + err
        	})
        } else {
        	console.log(docs);
        	res.json({
        		type: true,
        		data: docs
        	})
        	console.log('query success - ' + docs);
        }
    });
}

exports.getGroup = function(req, res, next) {
    //mongoose.connect('mongodb://localhost/test');
    console.log('getGroup called...');
}

exports.createGroup = function(req, res, next) {
	var group = req.body;
	db.insert(group, function(err, newGroup){
		if(err){
            console.log("Error inserting group - " + err)
            res.json({
            	success: false,
            	data: err
            })
		}
		else{
			console.log("Group inserted successfully - "+ newGroup);
			res.json({
				success: true,
				data: newGroup
			})	
		}
	})
}

exports.updateGroup = function(req, res, next) {
	var group = req.body;
	db.update({ _id: group._id }, { $set: group }, function(err, numReplaced){
		if(err){
            console.log("Error updating group - " + err)
            res.json({
            	success: false,
            	data: err
            })
		}
		else{
			console.log("Group updated successfully - "+ numReplaced);
			res.json({
				success: true
			})	
		}
	})
}