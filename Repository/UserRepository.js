var Users = require('../Models').Users;
const bcrypt = require('bcryptjs');
const Constants = require('../Config/Constants');
var sequelize = require('sequelize');
// const Op = sequelize.Op

module.exports.getUser = function (conditions, callback) {
	Users.find(
		conditions
	).then(users => {
		callback(null, users)
	}).catch(error => {
		callback(error, null);
	});
}

module.exports.getAllUsers = function (conditions, callback) {
	Users.findAll(
		conditions
	).then(users => {
		callback(null, users)
	}).catch(error => {
		callback(error, null);
	});
}

module.exports.comparePassword = function (candidatePassword, hash, callback) {
	bcrypt.hash()
	bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
}

module.exports.hashPassword = function (password, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(password, salt, (err, hash) => {
			if (err) throw err;
			callback(null, hash);
		});
	});
}

module.exports.createUser = function (newUser, callback) {
	bcrypt.genSalt(10, (err, salt) => {
		bcrypt.hash(newUser.password, salt, (err, hash) => {
			if (err) throw err;
			newUser.password = hash;
			newUser.isActive = Constants.BOOLEAN.TRUE;	//Active by default
			newUser.isDeleted = Constants.BOOLEAN.FALSE;	//False by default
			newUser.createdAt = sequelize.literal(Constants.DB_CONST.LITERAL_GETDATE);
			newUser.updatedAt = sequelize.literal(Constants.DB_CONST.LITERAL_GETDATE);
			BPAPortalUsers.create(newUser).then(_user => {
				callback(null, _user.dataValues);
			}).catch(err => {
				callback(err, null);
			});
		});
	});
}

module.exports.findOneAndUpdate = function (conditions, updateFields, callback) {
	Users.find({ where: conditions }).then(userExist => {
		if (userExist) {
			Users.update(
				updateFields,
				{ where: conditions }
			).then(_updated => {
				callback(null, _updated);
			}).catch(err => {
				callback(err, null);
			});
		} else callback(Constants.NO_RECORD_FOUND, Constants.NULL);
	}).catch(err => {
		callback(err, Constants.NULL);
	});
}

module.exports.getOneWithCredentials = function (conditions, callback) {
	Users.find(
		conditions
	).then(_user => {
		callback(Constants.NULL, _user);
	}).catch(_error => {
		callback(_error, Constants.NULL);
	});
}

module.exports.getUsersCount = function (conditions, callback) {
	Users.count(conditions).then(count => {
		callback(null, count)
	}).catch(error => {
		callback(error, null);
	});
}