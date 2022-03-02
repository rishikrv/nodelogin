exports.allAccess = (req, res) => {
  res.status(200).send(
    [
      {
        "Id": -1,
        "Name": "QuickPick",
        "Schedules": [
          {
            "Id": 5411,
            "Name": "#1 TMCC warehouse",
            "RouteId": -1,
            "ScheduleDateOnly": "2022-03-01T00:00:00",
            "HasPrepick": true
          },
        ]
      },
    ]
  );
};
