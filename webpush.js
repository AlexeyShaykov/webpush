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
  "endpoint": "https://fcm.googleapis.com/fcm/send/cJFvQhGxNHY:APA91bEkW2WaaoqfJlOk-GD04HJo9p2T1IW-AZ881uK-vjC9quG8o3KA4FATFxlccXs_q3IgJBE4Ly-n62uBhUmWGpINN5vjk_ssTGyYSW_2ayYDi_apCknMgNzVK1OHaYg67ZmOZDUP",
  "expirationTime": null,
  "keys": {
    "p256dh": "BNLJxs5rtjL_-EJ8MCaxHwbPixMUfBlKb6Kjr0Aipj5-JZA1wx6KDO9dtXg6SWoJ35kq14HydOFlwwoXeYpqBPw",
    "auth": "-3lXFEL-kZ6F98N8-i_ySg"
  }
}

const payload = JSON.stringify({
  title: "Here is msg title",
  body: 'Here is msg body'
});

webpush.sendNotification(pushSubscription, payload, true);