function validateNameLength(req, res, next) {
    const { name } = req.params

    if (name.length >= 3) {
        //if name is valid we want to move on to next middleware (hello || goodbye)
        next();
    } else {
        // here if name is too short we create Error and send it to error handling
        next("Name length is too short.");
    }
}

module.exports = validateNameLength;
