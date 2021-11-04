const express = require('express');
// const { check } = require('express-validator');
const router = express.Router();

const BachelorController = require('../controllers/projects_controller');

get_bachelor_project_url = '/bachelor_project'
router.get(get_bachelor_project_url, (req, res) => {
    BachelorController.get(req, res)
});

// router.post('/',
// [
//     check('name')
//     .isLength({ min: 1 })
//     .withMessage('Please enter a name'),
//     check('email')
//     .isLength({ min: 1 })
//     .withMessage('Please enter an email'),
// ], (req, res) => {
//     IndexController.post(req, res)
// });

module.exports = router;