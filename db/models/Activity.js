"use strict";
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "Activity",
    {
      Id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      Code: {
        type: DataTypes.STRING(10),
      },
      Activity: {
        type: DataTypes.INTEGER,
      },
      RequirementRulesID: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      Gender: {
        type: DataTypes.INTEGER,
      },
      Description: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      Ordinal: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      GocId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HeatRequirement: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      CPRRequirement: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      ConcussionRequirement: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      OncoreGroupID: {
        type: DataTypes.UUID,
        allowNull: true,
      },
      PartSurveyStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      QBInvoiceGenderCombine: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      StartMonth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      StartDay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      EndMonth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      EndDay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HomeStartMonth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HomeStartDay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HomeEndMonth: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      HomeEndDay: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MonthSeasonStart: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      MonthSeasonEnd: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "Activity",
      schema: "Organizations",
      timestamps: false,
      indexes: [
        {
          name: "OrganizationActivityCodeIndex",
          fields: [{ name: "Code" }],
        },
        {
          name: "OrganizationActivityOrdinalIndex",
          unique: true,
          fields: [{ name: "Ordinal" }],
        },
        {
          name: "OrganizationActivityPrimaryKey",
          unique: true,
          fields: [{ name: "Id" }],
        },
      ],
    }
  );
};
