//used to authenticate the user

const express = require("express")
var jwt = require("jsonwebtoken") 

async function checkJWTToken (req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send({ message: "No authorization header" });
    const token = authHeader.split(" ")[1];
    try {
        const user = await jwt.verify(token, "secret");
        req.user = user;
        next();
    } catch (err) {
        return res.status(403).send({ message: "Invalid token" });
    }
}

module.exports = {
    checkJWTToken
};