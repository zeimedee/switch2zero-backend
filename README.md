## CARBON OFFSET SIMULATION TOOL BACKEND

this is application as built with the expressJS


first install the dependencies by running the following commands in the terminal or command prompt

- ``` npm install```

and start the application using 
- ``` npm start ```

it can be accessed at 
```
http://localhost:4000/api/v1/simulate/
```

example of the request body
```
{
 "data":[
   {
     "country": 5.55, 
     "mode": "monthly", 
     "date": "2023-03-18", 
     "trees": 20, 
     "id": 1
   },
   {
     "country": 5.55, 
     "mode": "monthly", 
     "date": "2023-03-18", 
     "trees": 30, 
     "id": 1
   }
   ]
}
```

sample response
```
{
  "results": {
    "offsetData": [
      {
        "offset": 237.5,
        "month": "2023-03-18"
      },
      {
        "offset": 475,
        "month": "2023-04-01T00:00:00.000Z"
      },
      {
        "offset": 712.5,
        "month": "2023-05-01T00:00:00.000Z"
      },
      {
        "offset": 950,
        "month": "2023-06-01T00:00:00.000Z"
      },
      {
        "offset": 1187.5,
        "month": "2023-07-01T00:00:00.000Z"
      },
      {
        "offset": 1425,
        "month": "2023-08-01T00:00:00.000Z"
      },
      {
        "offset": 1662.5,
        "month": "2023-09-01T00:00:00.000Z"
      },
      {
        "offset": 1900,
        "month": "2023-10-01T00:00:00.000Z"
      },
      {
        "offset": 2137.5,
        "month": "2023-11-01T00:00:00.000Z"
      },
      {
        "offset": 2375,
        "month": "2023-12-01T00:00:00.000Z"
      },
      {
        "offset": 2612.5,
        "month": "2024-01-01T00:00:00.000Z"
      },
      {
        "offset": 2850,
        "month": "2024-02-01T00:00:00.000Z"
      },
      {
        "offset": 3087.5,
        "month": "2024-03-01T00:00:00.000Z"
      },
      {
        "offset": 3325,
        "month": "2024-04-01T00:00:00.000Z"
      },
      {
        "offset": 3562.5,
        "month": "2024-05-01T00:00:00.000Z"
      },
      {
        "offset": 3800,
        "month": "2024-06-01T00:00:00.000Z"
      },
      {
        "offset": 4037.5,
        "month": "2024-07-01T00:00:00.000Z"
      },
      {
        "offset": 4275,
        "month": "2024-08-01T00:00:00.000Z"
      },
      {
        "offset": 4512.5,
        "month": "2024-09-01T00:00:00.000Z"
      },
      {
        "offset": 4750,
        "month": "2024-10-01T00:00:00.000Z"
      },
      {
        "offset": 4987.5,
        "month": "2024-11-01T00:00:00.000Z"
      },
      {
        "offset": 5225,
        "month": "2024-12-01T00:00:00.000Z"
      },
      {
        "offset": 5462.5,
        "month": "2025-01-01T00:00:00.000Z"
      },
      {
        "offset": 5700,
        "month": "2025-02-01T00:00:00.000Z"
      }
    ],
    "spendData": [
      {
        "month": "2023-03-18",
        "amt": 6000
      },
      {
        "month": "2023-04-01T00:00:00.000Z",
        "amt": 12600
      },
      {
        "month": "2023-05-01T00:00:00.000Z",
        "amt": 19200
      },
      {
        "month": "2023-06-01T00:00:00.000Z",
        "amt": 25800
      },
      {
        "month": "2023-07-01T00:00:00.000Z",
        "amt": 32400
      },
      {
        "month": "2023-08-01T00:00:00.000Z",
        "amt": 39000
      },
      {
        "month": "2023-09-01T00:00:00.000Z",
        "amt": 45600
      },
      {
        "month": "2023-10-01T00:00:00.000Z",
        "amt": 52200
      },
      {
        "month": "2023-11-01T00:00:00.000Z",
        "amt": 58800
      },
      {
        "month": "2023-12-01T00:00:00.000Z",
        "amt": 65400
      },
      {
        "month": "2024-01-01T00:00:00.000Z",
        "amt": 72000
      },
      {
        "month": "2024-02-01T00:00:00.000Z",
        "amt": 78600
      },
      {
        "month": "2024-03-01T00:00:00.000Z",
        "amt": 85200
      },
      {
        "month": "2024-04-01T00:00:00.000Z",
        "amt": 91800
      },
      {
        "month": "2024-05-01T00:00:00.000Z",
        "amt": 98400
      },
      {
        "month": "2024-06-01T00:00:00.000Z",
        "amt": 105000
      },
      {
        "month": "2024-07-01T00:00:00.000Z",
        "amt": 111600
      },
      {
        "month": "2024-08-01T00:00:00.000Z",
        "amt": 118200
      },
      {
        "month": "2024-09-01T00:00:00.000Z",
        "amt": 124800
      },
      {
        "month": "2024-10-01T00:00:00.000Z",
        "amt": 131400
      },
      {
        "month": "2024-11-01T00:00:00.000Z",
        "amt": 138000
      },
      {
        "month": "2024-12-01T00:00:00.000Z",
        "amt": 144600
      },
      {
        "month": "2025-01-01T00:00:00.000Z",
        "amt": 151200
      },
      {
        "month": "2025-02-01T00:00:00.000Z",
        "amt": 157800
      }
    ]
  }
}
```
