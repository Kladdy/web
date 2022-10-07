const express = require('express');
const router = express.Router();

const BachelorController = require('../controllers/projects_controller');

get_bachelor_project_url = '/bachelor_project'
router.get(get_bachelor_project_url, (req, res) => {
    BachelorController.get(req, res)
});

module.exports = router;