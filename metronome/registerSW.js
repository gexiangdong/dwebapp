if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/metronome/sw.js', { scope: '/metronome/' })})}