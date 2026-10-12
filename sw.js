self.addEventListener('install', (e) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (e) => {
  // يمكنك إضافة قواعد التخزين المؤقت هنا لاحقاً
});
