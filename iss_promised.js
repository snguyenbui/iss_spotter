const request = require('request-promise-native');

const fetchMyIP = () => {
  return request('https://api.ipify.org?format=json');
}

const fetchCoordsByIP = (body) => {
  const IP = JSON.parse(body).ip
  return request(`https://freegeoip.app/json/${IP}`);
};

const fetchISSFlyOverTimes = (data) => {
  const coords = JSON.parse(data);
  return request(`http://api.open-noatify.org/iss-pass.json?lat=${coords.latitude}&lon=${coords.longitude}`);
}

const nextISSTimesForMyLocation = () => {
  return fetchMyIP()
  .then(fetchCoordsByIP)
  .then(fetchISSFlyOverTimes)
  .then(body => {
    const nextTimes = JSON.parse(body)
    return nextTimes
  });
} 

module.exports = { nextISSTimesForMyLocation }