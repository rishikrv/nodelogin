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
          {
            "Id": 5412,
            "Name": "#2 TMCC warehouse",
            "RouteId": -1,
            "ScheduleDateOnly": "2022-03-02T00:00:00",
            "HasPrepick": false
          }
        ]
      },
      {
        "Id": 0,
        "Name": "TMCC warehouse",
        "Schedules": [
    
        ]
      },
      {
        "Id": 2,
        "Name": "TMCC Off Site",
        "Schedules": [
          {
            "Id": 5388,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5392,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2014-01-28T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5405,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2014-02-20T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5407,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2014-02-21T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5408,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2014-02-24T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5409,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2015-11-16T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5410,
            "Name": "",
            "RouteId": 2,
            "ScheduleDateOnly": "2015-11-17T00:00:00",
            "HasPrepick": false
          }
        ]
      },
      {
        "Id": 3,
        "Name": "TMCC Sierra Main",
        "Schedules": [
          {
            "Id": 5390,
            "Name": "",
            "RouteId": 3,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5406,
            "Name": "",
            "RouteId": 3,
            "ScheduleDateOnly": "2014-02-20T00:00:00",
            "HasPrepick": true
          }
        ]
      },
      {
        "Id": 4,
        "Name": "Vista Lobby",
        "Schedules": [
          {
            "Id": 5386,
            "Name": "",
            "RouteId": 4,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5396,
            "Name": "",
            "RouteId": 4,
            "ScheduleDateOnly": "2014-02-19T00:00:00",
            "HasPrepick": true
          }
        ]
      },
      {
        "Id": 5,
        "Name": "Student Center Lobby",
        "Schedules": [
          {
            "Id": 5387,
            "Name": "",
            "RouteId": 5,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5397,
            "Name": "",
            "RouteId": 5,
            "ScheduleDateOnly": "2014-02-19T00:00:00",
            "HasPrepick": true
          }
        ]
      },
      {
        "Id": 6,
        "Name": "RDMT 2nd Floor",
        "Schedules": [
          {
            "Id": 5384,
            "Name": "",
            "RouteId": 6,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          },
          {
            "Id": 5395,
            "Name": "",
            "RouteId": 6,
            "ScheduleDateOnly": "2014-02-19T00:00:00",
            "HasPrepick": true
          }
        ]
      },
      {
        "Id": 7,
        "Name": "RDMT 3rd & 4th Floor",
        "Schedules": [
          {
            "Id": 5385,
            "Name": "",
            "RouteId": 7,
            "ScheduleDateOnly": "2014-01-27T00:00:00",
            "HasPrepick": true
          }
        ]
      }
    ]
  );
};
