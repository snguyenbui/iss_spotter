const request = require('request');
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = (callback) => {
  // use request to fetch IP address from JSON API
  // https://api.ipify.org?format=json

  request('https://api.ipify.org?format=json', (error, status, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (status.statusCode === 200) {
      const IP = JSON.parse(body);
      callback(null, IP.ip);
      return;
    } else {
      const msg = `Status Code ${status.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  // https://freegeoip.app/{format}/{IP_or_hostname}
  request('https://freegeoip.app/json/' + ip, (error, status, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (status.statusCode === 200) {
      const data = JSON.parse(body);
      callback(null, {"latitude": data.latitude, "longitude": data.longitude});
      return;
    } else {
      const msg = `Status Code ${status.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  });
};

module.exports = {
  fetchMyIP,
  fetchCoordsByIP
};
