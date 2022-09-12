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

// const pushSubscription = {
//   "endpoint": "https://fcm.googleapis.com/fcm/send/dR1zMeXyXu0:APA91bEOwkEucmWgPQmgwvdVrR43hDgT5UOgFiH5gj5aSGm-nLsSG7CDOcFCl1hAb4q6FIj-uERj3Csu-yFodDKiJRS9syGXjpv-EqQySEFqq8_xUeCp-JypMaFBycA38KQup7O36pfN",
//   "expirationTime": null,
//   "keys": {
//     "p256dh": "BIHsfBgmgw5hXsJqQX8iNxWBypB-To-k1pmKPhoiUxHrrxR5wAuCCWXk2_ydqc2WitK5Blx5yCMqSjlpjeRwbAM",
//     "auth": "L_Y-h21Bt5RnU7qW8CxUPg"
//   }
// }

const pushSubscription = {
  "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABjHznf5AvIeNSRQUYsM7CJYzu5nPd-VfsUxVCG9pbIe_hrL-FbaVCziczdKITkE8jWlkw3rXeGTVGrFVfx5orZP0g3dsJJYB4JS-BHDh1ytMCXZLUgI24Hpcx-fRD3dXLgm3q5s_CkZuuT9EUZ9cNhZ5cUVCjVJfweSJi9DpnJAeTN7fw",
  "expirationTime": null,
  "keys": {
    "auth": "XSu7UZduh_p3HTDwITXdmg",
    "p256dh": "BGlaFfc265ZaD6jLv-K9EH5_PE5AvAxxtDAneFo2TdNXfoR5V8bWrz5HN7hPAc-1PjDMJN1roaAepCQU1eTbXt8"
  }
}

const payload = JSON.stringify({
  title: "Here is msg title",
  body: 'Here is msg body'
});

webpush.sendNotification(pushSubscription, payload, true);