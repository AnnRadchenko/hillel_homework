var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);

var CARS = [{
  id: 1,
  brand: "Audi",
  models: [{
    id: 1,
    name: "A1",
    collection: [{
      id: 1,
      version: "Sportback",
      year: 2019,
      horsepower: 95,
      engine: 999
    }, {
      id: 2,
      version: "Citycarver",
      year: 2019,
      horsepower: 95,
      engine: 999
    }]
  }, {
    id: 2,
    name: "Q5",
    collection: [{
      id: 1,
      version: "FY 2021",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }, {
      id: 2,
      version: "Sportback",
      year: 2021,
      horsepower: 299,
      engine: 1984
    }]
  }, {
    id: 3,
    name: "TT",
    collection: [{
      id: 1,
      version: "Coupe",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }, {
      id: 2,
      version: "Roadster",
      year: 2021,
      horsepower: 197,
      engine: 1984
    }]
  }]
}, {
  id: 2,
  brand: "BMW",
  models: [{
    id: 1,
    name: "8 series",
    collection: [{
      id: 1,
      version: "G1X LCI",
      year: 2022,
      horsepower: 333,
      engine: 2998
    }, {
      id: 2,
      version: "G1X",
      year: 2019,
      horsepower: 340,
      engine: 2998
    }]
  }, {
    id: 2,
    name: "X6",
    collection: [{
      id: 1,
      version: "G06 LCI",
      year: 2023,
      horsepower: 530,
      engine: 4395
    }, {
      id: 2,
      version: "G06",
      year: 2020,
      horsepower: 286,
      engine: 2993
    }]
  }]
}];

var CarDescriptionList = function CarDescriptionList(_ref) {
  var item = _ref.item;
  return React.createElement(
    "ul",
    null,
    Object.keys(item).map(function (key, index) {
      return key !== "id" && React.createElement(
        "li",
        { key: index },
        key,
        ": ",
        item[key]
      );
    })
  );
};

var App = React.createElement(
  React.Fragment,
  null,
  React.createElement(
    "h1",
    null,
    "Car Specs"
  ),
  React.createElement(
    "table",
    null,
    React.createElement(
      "tbody",
      null,
      CARS.map(function (car, index) {
        return React.createElement(
          React.Fragment,
          { key: index },
          React.createElement(
            "tr",
            { className: "row__brand" },
            React.createElement(
              "td",
              { colSpan: "2" },
              car.brand
            )
          ),
          car.models.map(function (model, i) {
            return model.collection.map(function (item, index) {
              return React.createElement(
                "tr",
                { key: i + "." + index },
                index === 0 && React.createElement(
                  "td",
                  { rowSpan: "2" },
                  model.name
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement(CarDescriptionList, { item: item })
                )
              );
            });
          })
        );
      })
    )
  )
);

root.render(App);