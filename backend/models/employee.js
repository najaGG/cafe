// นำเข้า sequelize จาก db_instance.js
const Sequelize = require("sequelize");
const sequelize = require("../db_instance");

const employee = sequelize.define("employee", {
    id: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true, 
    },
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    level: {
        type: Sequelize.STRING,
        defaultValue: "normal",
    },
}, {
    // Additional options if needed
    timestamps: false // ปิดการใช้งานฟิลด์ createdAt และ updatedAt
});

(async () => {
    await employee.sync({ force: false });
})();

module.exports = employee;
