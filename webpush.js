const webpush = require('web-push');

// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    'BO0CGNV8dmf_RHhz8Bvs2-QxnvFPgiLkGuEcYfSe2fB2hB47SkmSpM7J--mVtuRCzqW-tfaKWVyVQn4GJ_zVshc',
  privateKey: 'ck2yesNCBc-h78JuxE8J3H3jabUZU41yUNMde2ZFb4s'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');
