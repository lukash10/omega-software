module.exports = (req, res, next) => {

    const jwt = require('jsonwebtoken');
    const urls = ['/api/login' , '/api/news', '/api/news/dates', '/api/tags', '/api/courses', '/api/poles'];
    const url = require('url');

    if (urls.includes(url.parse(req.url).pathname) || !req.url.includes('/api/')) {
        
        next();
        return;
    }

    const { authorization } = req.headers;

    if (!authorization) {

        res.status(401).send({msg: 'Usuário não autorizado'});

        return
    }

    const token = authorization.split(' ')[1];

    const { userId } = jwt.verify(token, 'myjwtsecret');

    if (!userId) {
        
        res.status(401).send({msg: 'Usuário não autorizado'});

        return
    }
    
    next();
}