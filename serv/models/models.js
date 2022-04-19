import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

export const user = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, allowNull: false, unique: true},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

export const basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

export const basketDevice = sequelize.define('basket_device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

export const device = sequelize.define('device', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    price: {type: DataTypes.INTEGER},
    name: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING, allowNull: false}
})

export const type = sequelize.define('type', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

export const brand = sequelize.define('brand', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

user.hasOne(basket)
basket.belongsTo(user)

// basket.hasMany(device)
// device.belongsTo(basket)
basket.hasMany(basketDevice)
basketDevice.belongsTo(basket)
device.hasOne(basketDevice)
basketDevice.belongsTo(device)

type.hasMany(device)
device.belongsTo(type)

brand.hasMany(device)
device.belongsTo(brand)

