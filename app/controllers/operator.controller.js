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
          "Id": 580,
          "Name": "Treat Africa",
          "Code": "treatamerica"
        }
      ],
      "SelectedOperatorId": null,
      "ServerUtcDateTimeIsRecent": true
    }
  );
};
