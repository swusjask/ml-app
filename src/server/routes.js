const { postPredictHandler, getAllPredictionsHandler } = require('../server/handler');

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (request, h) => {
            return 'Hello, worldzz!';
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
    },
    {
        path: '/predict/histories',
        method: 'GET',
        handler: getAllPredictionsHandler,
    }
]

module.exports = routes;