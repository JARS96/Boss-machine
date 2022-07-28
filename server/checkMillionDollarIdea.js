const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weekly } = req.body;
    const total = Number(numWeeks) * Number(weekly);
    if(!numWeeks || weekly || isNaN(total) || total < 1000000) {
        res.status(400).send();
    }else{
        next()
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
