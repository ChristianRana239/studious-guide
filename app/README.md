# Quick start

https://developer.chrome.com/docs/android/trusted-web-activity/quick-start/

npm install bubblewrap di Google non funziona

node_modules/.bin/bubblewrap init --manifest=https://aab016.github.io/manifest.json

node_modules/.bin/bubblewrap build


passiamo a clonare https://github.com/meta-quest/bubblewrap

cd bubblewrap/bubblewrap
npm install
npm run build

Da qua https://github.com/meta-quest/bubblewrap/blob/main/bubblewrap/Dockerfile#L3C28-L3C54 ho scoperto esistenza di @meta-quest/bubblewrap-cli

npm install @meta-quest/bubblewrap-cli
