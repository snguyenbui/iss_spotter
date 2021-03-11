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
    }
    if (status.statusCode === 200) {
      const IP = JSON.parse(body);
      callback(null, IP.ip);
    }
  });
};

module.exports = { fetchMyIP };
