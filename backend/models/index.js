const {DataTypes} = require("sequelize");
const db = require("../database/postgre");

const User = db.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true}
});

const ShrtList = db.define('shrt_list', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    }
});

const ShrtUrl = db.define("shrt_url", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    original_url: {type: DataTypes.STRING},
    shrt_url: {type: DataTypes.STRING},
    listId: {
        type: DataTypes.INTEGER,
        references: {
            model: ShrtList,
            key: 'id'
        }
    }
});

User.hasOne(ShrtList);
ShrtList.belongsTo(User);

ShrtList.hasMany(ShrtUrl);
ShrtUrl.belongsTo(ShrtUrl);

module.exports = {
    ShrtList,
    ShrtUrl,
    User
};
