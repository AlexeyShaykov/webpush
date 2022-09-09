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
  "endpoint": "https://fcm.googleapis.com/fcm/send/faz7-v8H_S0:APA91bHbHb5cP7cjC94mflG7tEYbPtYOBOTKyZdVzAMPZRrDUbsmi7sfdJRC8W_S24MHhJZpGx-7k7Ndczs3pApeLLUvyrN8iow8_mlQVUly68ar2UiE7FbC_C_vKAMzMoFFL7VDj7UQ",
  "expirationTime": null,
  "keys": {
    "p256dh": "BDXsUKl0qKnRw94sfL6WAVMBMmrqxHqFLgs_X4x3Vico7D1-cQG7tzA-FASU5ULTlUNw9TcTzmZDaSe6j1AWZL8",
    "auth": "Rf8EcLaiaKhS59gBR4-amA"
  }
}

const payload = JSON.stringify({
  title: "Here is msg title",
  body: 'Here is msg body'
});

webpush.sendNotification(pushSubscription, payload, true);