module.exports = (error, req, res, next) => {
    console.log(error.execptionMsg);
    
    res
        .sendStatus(error.statusCode)
        .send(error.data);
}