const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try {
        if(!req.header.authorization) return res.status(401).send();
        const token = req.header.authorization.split(" ")[1];
        const payload = jwt.verify(token,process.env.SECRET);
        req.user = payload
        next();
    } catch (error) {
        return res.status(401).send();
    }
  
}

module.exports = auth;