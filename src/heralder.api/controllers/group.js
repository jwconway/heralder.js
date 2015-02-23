var Datastore = require('nedb');
var db = new Datastore({ filename: 'bin/data/groups.db', autoload: true });

exports.getGroups = function(req, res, next) {
    db.find({}, function (err, docs) {
        if(err) {
        	res.status(500);
        	res.json({
        		data: "Error occurred - " + err
        	})
        } else {
        	res.json({
        		success: true,
        		data: docs
        	})
        }
    });
}

exports.getGroup = function(req, res, next) {
    console.log(req.params.id);
    db.findOne({ _id: req.params.id }, function(err, doc) {
        if(err) {
            res.status(500);
            res.json({
                success: false,
                data: "Error occured - " + err
            })
        } else {
            res.json({
                success: true,
                data: doc
            })
        }
    })
}

exports.createGroup = function(req, res, next) {
	var group = req.body;
	db.insert(group, function(err, newGroup){
		if(err){
            res.status(500);
            res.json({
            	success: false,
            	data: err
            })
		}
		else{
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
            res.json({
            	success: false,
            	data: err
            })
		}
		else{
			res.json({
				success: true
			})	
		}
	})
}