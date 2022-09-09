const webpush = require('web-push');

const result = webpush.generateVAPIDKeys();

console.log(result);