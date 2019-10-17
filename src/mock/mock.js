let axios = require("axios");
let MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
let mock = new MockAdapter(axios);

const urlData = require("../api/eventsData.json");

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/events").reply(200, {
  startupEvents: urlData
});

module.exports = MockAdapter;
