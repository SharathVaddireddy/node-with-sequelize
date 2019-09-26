const express = require('express');
const router = express.Router();
const passport = require('passport');

var Constants = require('../Config/Constants');
const UserService = require('../Service/UserService');
var multipart = require('connect-multiparty');
const _ = require('lodash');

router.post('/adduser', (req, res, next) => {
	if (req.body.userId && req.body.email && req.body.password) {
		return UserService.addUsers(req, res);
	} else {
		res.json({
			success: false,
			msg: 'Restricted condition'
		});
	}
});

router.get('/getUser', (req, res, next) => {
	return UserService.getUser(req, res);
});

router.post('/getall', (req, res, next) => {
	if (req.body.pagination && !_.isUndefined(req.body.pagination.page) && !_.isUndefined(req.body.pagination.pageSize)) {
		return UserService.getAllUsers(req, res);
	} else {
		res.json({
			sucess: false,
			msg: 'Restricted condition'
		})
	}
});

router.post('/hash', (req, res, next) => {
	return UserService.gethash(req, res);
});

router.post('/update', (req, res, next) => {
	if (req.body && req.body.conditions && req.body.conditions.userId && req.body.updateFields) {
		delete req.body.updateFields.email;
		delete req.body.updateFields.createdAt
		return UserService.updateUser(req, res);
	} else {
		res.json({
			success: false,
			msg: 'Restricted condition'
		});
	}
});

module.exports = router;