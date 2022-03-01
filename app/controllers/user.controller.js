const config = require("../config/auth.config");
const db = require("../models");
const Warehouse = db.Warehouse;

exports.allAccess = (req, res) => {
  res.status(200).send(
    {
      "warehouse": [
        {
          "warehousename": "Lake Austin Vending Main Warehouse",
          "id": 1,
        },
        {
          "warehousename": "Return Truk",
          "id": 2,
        },
        {
          "warehousename": "Return Truk South",
          "id": 3,
        },
        {
          "warehousename": "Return Truk West",
          "id": 4,
        },
        {
          "warehousename": "Lake Austin Vending Main Warehouse",
          "id": 5,
        },
        {
          "warehousename": "Return Truck west South",
          "id": 6,
        },
        {
          "warehousename": "Return Truck-3",
          "id": 7,
        },
        {
          "warehousename": "Return Truck South West",
          "id": 8,
        },
        {
          "warehousename": "Return Truck North",
          "id": 9,
        },
      ]
    }



  );
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
