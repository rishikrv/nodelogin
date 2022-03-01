exports.allAccess = (req, res) => {
  res.status(200).send(
    {
      "Operators": [
        {
          "Id": 580,
          "Name": "Treat America",
          "Code": "treatamerica"
        },
        {
          "Id": 581,
          "Name": "Treat Africa",
          "Code": "treatafrica"
        },
        {
          "Id": 582,
          "Name": "Seed Ware",
          "Code": "seed"
        },
        {
          "Id": 583,
          "Name": "Pepsi",
          "Code": "pepsi"
        },
        {
          "Id": 584,
          "Name": "Trident",
          "Code": "trident"
        },
        {
          "Id": 585,
          "Name": "Caffe Coffe day",
          "Code": "caffecoffeday"
        }
      ],
      "SelectedOperatorId": null,
      "ServerUtcDateTimeIsRecent": true
    }
  );
};
