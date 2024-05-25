const postPredictHandler = require('../server/handler');

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Hello, worldz!';
        }
    },
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                maxBytes: 1000000, // 1MB
                multipart: true,
                allow: 'multipart/form-data'
            }
        }
    }
]

module.exports = routes;