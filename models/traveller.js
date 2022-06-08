const Journey = require("./journey");

const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const journeysByTransport = this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
  return journeysByTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysWithMinDistance = this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
  return journeysWithMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let total = this.journeys.reduce((runningTotal, journey) => {
    return runningTotal + journey.distance
  }, 0);
  return total;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let allModesOfTransport = this.journeys.map((journey) => { return journey.transport });
  let uniqueModesOfTransport = [...new Set(allModesOfTransport)];

  return uniqueModesOfTransport;
};


module.exports = Traveller;
