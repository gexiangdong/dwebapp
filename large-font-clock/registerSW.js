if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/large-font-clock/sw.js', { scope: '/large-font-clock/' })})}