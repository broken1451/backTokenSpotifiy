"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Router = require('express');
var request = require('request');
var router = Router();
// Define tus rutas aquí. Por ejemplo:
router.get('/generate-token/:client_id/:client_secret', function (req, res) {
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (Buffer.from(req.params.client_id + ':' + req.params.client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            return res.status(200).json(body);
        }
    });
});
exports.default = router;
