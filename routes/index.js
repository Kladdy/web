const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const { analytics } = require('../segment_analytics/analytics')
const { get_ip_details } = require('./get_ip_details')

const IndexController = require('../controllers/index_controller');

router.get('/', (req, res) => {
    analytics.track({
        anonymousId: req.sessionID,
        event: 'get_home',
        properties: {
            url: '/',
            env: process.env.WEBENV,
            ...get_ip_details(req)
        },
    })

    IndexController.get(req, res)
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