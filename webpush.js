const webpush = require('web-push');

const vapidKeys = {
  publicKey: 'BO0CGNV8dmf_RHhz8Bvs2-QxnvFPgiLkGuEcYfSe2fB2hB47SkmSpM7J--mVtuRCzqW-tfaKWVyVQn4GJ_zVshc',
  privateKey: 'ck2yesNCBc-h78JuxE8J3H3jabUZU41yUNMde2ZFb4s'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  "endpoint": "https://fcm.googleapis.com/fcm/send/dfGDpiZ7YHE:APA91bEbCMjMKsmSHvl1wXyJqXo5CUrkNU8AzDOaHiBBT58uyJ0M0u-v74HYuMMfWYlyFxGKPQ1m36-__L2EvPGKr-IMDeYB5yfTboAXVCY1YcGjZYUzOqxIRHnq0q-CXi4iHGeN6tsj",
  "expirationTime": null,
  "keys": {
    "p256dh": "BOxMsjCx6ECZcTpeszrn4J-R7-1UbmVi52KdKq1FynMQ-0lKAwQ2ZaTaF9nmu03-5gAKMvG3kreAu5r3Mcf5JM0",
    "auth": "P0oEc9rB8eW3dMaOU0Kk3Q"
  }
}

const payload = JSON.stringify({
  title: "Here is msg title",
  body: 'Here is msg body'
});

webpush.sendNotification(pushSubscription, payload, true);