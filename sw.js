self.addEventListener('push', (options) => {
  self.registration.showNotification('Hello world!', options);
});
