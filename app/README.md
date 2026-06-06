# Quick start

Da qua https://github.com/meta-quest/bubblewrap/blob/main/bubblewrap/Dockerfile#L3C28-L3C54 ho scoperto esistenza di @meta-quest/bubblewrap-cli

Altrimenti loro suggerivano di buildare
https://developers.meta.com/horizon/documentation/web/pwa-packaging/

Installato JDK Temurin (Eclipse Foundation) version 17 via GitHub Codespace .devcontainer/devcontainer.json features.

cd app
npm install
alias bubblewrap=${PWD}/node_modules/.bin/bubblewrap

La version 6609375 è hardcoded qua
https://github.com/meta-quest/bubblewrap/blob/bde45f6ea3bd4eb958193575cd71a8b7b3e99a77/bubblewrap/packages/cli/src/lib/AndroidSdkToolsInstaller.ts#L22-L26

wget https://dl.google.com/android/repository/commandlinetools-linux-6609375_latest.zip
unzip commandlinetools-linux-6609375_latest.zip

https://developer.android.com/tools/sdkmanager tricky session
mkdir android_sdk
mv tools android_sdk/
mkdir -p android_sdk/cmdline-tools/latest
mv android_sdk/tools/bin android_sdk/cmdline-tools/latest/
mv android_sdk/tools/lib android_sdk/cmdline-tools/latest/
mv android_sdk/tools/NOTICE.txt android_sdk/cmdline-tools/latest/
mv android_sdk/tools/source.properties android_sdk/cmdline-tools/latest/

rm -Rf android_sdk/tools

export PATH=$PATH:${PWD}/android_sdk/cmdline-tools/latest/bin

sdkmanager "platforms;android-23" "build-tools;23.0.3" "platform-tools"

cd my-pwa
bubblewrap init --manifest=https://aab016.github.io/manifest.json --metaquest
JDK path: /usr/local/sdkman/candidates/java/current
Android SDK path: /workspaces/studious-guide/app/android_sdk/cmdline-tools/latest

Splash screen color: #6b46c1
Maskable icon URL: https://aab016.github.io/studious-guide/assets/metaverso-a-scuola.black.square.512x512.png
Monochrome icon URL: vuoto

First and Last names (eg: John Doe): Luigi Lagrange
Organizational Unit (eg: Engineering Dept): Computer Science Dept
Organization (eg: Company Name): MIIS038002

Ripristinare da Google Drive
https://drive.google.com/drive/folders/1VWvVyD0qJnHImTOUMDNK-xhmSnemyxK1

Keystore: /workspaces/studious-guide/app/my-pwa/android.keystore
Gradle: /workspaces/studious-guide/app/my-pwa/gradle/wrapper/gradle-wrapper.jar

Per evitare che i log di gradle sfondino il maxBuffer di node...
export ANDROID_HOME=/workspaces/studious-guide/app/android_sdk
chmod +x gradlew
./gradlew assembleRelease

bubblewrap build

# Create Digital Asset Link for your PWA
https://developers.meta.com/horizon/documentation/web/pwa-packaging/#create-digital-asset-link-for-your-pwa

keytool -list -v \
    -keystore /workspaces/studious-guide/app/my-pwa/android.keystore \
    -alias android \
    -keypass <key-password> \
    -storepass <store-password> | grep SHA256

bubblewrap fingerprint add <fingerprint>
