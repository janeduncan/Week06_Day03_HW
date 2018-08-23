const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map ((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map ((mode) => {
    return journey.transport;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

// Can use +, reduce coverts it to =+ for us.
Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return [...new Set(this.getModesOfTransport())];
};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   let transportation = this.getModesOfTransport();
//   return transportation.filter((mode, index) => {
//     return transportation.indexOf(mode) === index;
//   })
// };

module.exports = Traveller;

// array = ['train', 'aeroplane', 'car', 'ferry', 'car']
// return array.filter((x, i, a) => a.indexOf(x) == i)
