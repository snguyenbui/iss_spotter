const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log("It worked! Returned IP:", ip);
// });

// fetchCoordsByIP("invalidIPHere", (error, data) => {
//   console.log("Error: ", error);
//   console.log("Data: ", data);
// });

fetchISSFlyOverTimes({latitude: '49.27670', longitude: '-123.13000'}, (error, times) => {
  console.log(times);
  console.log("Error: ", error);
});