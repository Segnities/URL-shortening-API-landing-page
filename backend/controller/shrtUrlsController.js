const {ShrtUrl, ShrtList} = require("../models/index");
const APIError = require("../errors/APIError");

class ShrtLinksController {
    async fetchAllByUserId(req, res, next) {
        try {
            const {userId} = req.body;
            const shrtList = await ShrtList.findOne({ where: {userId}});
            const listId = shrtList.id;
            const shrtUrls = await ShrtUrl.findAll({where: {listId}});

            return res.json({listId, urls: shrtUrls});
        } catch (e) {
            next(APIError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const { listId } = req.body;
            const 
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }
}

module.exports = ShrtLinksController;