const APIError = require("../errors/APIError");
const {User} = require("../models");

class UserController {

    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            return res.json({users});
        } catch (e) {
            console.log(e)
        }
    }
    async createUser(req, res, next) {
        try {
            const {
                email,
                providerName,
                providerId
            } = req.body;
            const userExists = await User.findOne({where: {email}});

            if (userExists) {
                throw new Error("User already exists!");
            }
            const user = await User.create({email, providerId, providerName});
            return res.json({user});
        } catch (e) {
            console.log(e);
            next(APIError.badRequest("Problems with user auth"));
        }
    }
    async auth(req, res) {
        try {
            const {
                email,
                providerName,
                providerId
            } = req.body;
            const userExists = await User.findOne({where: {email}});

            if (userExists) {
                return res.json({user: userExists});
            }
            const user = await User.create({email, providerId, providerName});
            return res.json({user});
        } catch (e) {
            console.log(e);
        }
    }
    async getUser(req, res, next) {
        try {
            const {id} = req.body;
            const user = await User.findOne({where: {id}});

            if(!user) {
                throw new Error("Problems with user auth");
            }
            return res.json({user});
        } catch (e) {
            console.log(e);
            next(APIError.badRequest("Can't find user"));
        }

    }
}

module.exports = new UserController();