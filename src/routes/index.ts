const Router = require('express');
const request = require('request');

const router = Router();
// Define tus rutas aquí. Por ejemplo:
router.get('/generate-token/:client_id/:client_secret', (req: any, res: any) => {
    
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

    request.post(authOptions, function (error: any, response: any, body: any) {
        if (!error && response.statusCode === 200) {
            return res.status(200).json(body);
        }
    })
});

export default router;