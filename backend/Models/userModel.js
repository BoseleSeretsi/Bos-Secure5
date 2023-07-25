//user model
// module.exports = (sequelize, DataTypes) => {
//     const User = sequelize.define( "user", {
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         email: {
//             type: DataTypes.STRING,
//             unique: true,
//             isEmail: true, //checks for email format
//             allowNull: false
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//     }, {timestamps: true}, )
//     return User
//  }




module.exports = (sequelize, Sequelize) => {
    ;
    const User = sequelize.define('Customers', {
        userName: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING },
        password: { type: Sequelize.STRING }
    });

    return User;
}