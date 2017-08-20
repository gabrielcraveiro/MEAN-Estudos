var request = require('request');
request('https://www.reddit.com', function(error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body); // Show the HTML for the Google homepage
  } else {
    console.log(error);
  }
})