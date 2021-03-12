const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
  .then((nextPasses) => {
    printPassTimes(nextPasses);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

const printPassTimes = (passTimes) => {
  for (const time of passTimes.response) {
    let passing = new Date(time.risetime * 1000);
    console.log(`The next time the ISS will pass over is ${passing} for ${time.duration} seconds`);
  }
};