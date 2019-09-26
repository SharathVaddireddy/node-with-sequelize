/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define('Users', {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: true
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      isDeleted: {
        type: DataTypes.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '(getdate())'
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: '(getdate())'
      }
    }, {
        tableName: 'Users',
        timestamps: false
      });
    return users;
  };
  