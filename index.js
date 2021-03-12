const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (const time of passTimes.response) {
    let passing = new Date(time.risetime * 1000);
    console.log(`The next time the ISS will pass over is ${passing} for ${time.duration} seconds`);
  }
});
