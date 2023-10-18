const {v4:uuidv4} = require("uuid");
const {ShrtUrl, ShrtList} = require("../models/index");
const APIError = require("../errors/APIError");

class ShrtUrlsController {
    async fetchAllByUserId(req, res, next) {
        try {
            const {userId} = req.body;
            let shrtList = await ShrtList.findOne({ where: {userId}});
            if (!shrtList) {
                shrtList = await ShrtList.create({title: uuidv4(), userId});
            }
            const listId = shrtList.id;
            const shrtUrls = await ShrtUrl.findAll({where: {listId}});

            return res.json({listId, urls: shrtUrls});
        } catch (e) {
            next(APIError.badRequest(e.message))
        }
    }

    async create(req, res, next) {
        try {
            const { listId, original_url, shrt_url } = req.body;
            const shrtUrl = await ShrtUrl.create({listId, original_url, shrt_url});
            return res.json(shrtUrl);
        } catch (e) {
            next(APIError.badRequest(e.message));
        }
    }
}

module.exports = new ShrtUrlsController();