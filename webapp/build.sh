#!/bin/bash
echo "-- removing ../dist"
rm -rf ../dist/
echo "-- building to ../dist"
meteor build --directory ../dist --server https://epione.guzz.io
cd ../dist/android/
echo "-- signing"
cp release-unsigned.apk release-signed.apk
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 release-signed.apk guzz
echo "-- zipaligning"
~/Library/Android/sdk/build-tools/23.0.2/zipalign 4 release-signed.apk epione.apk
echo "-- copying epione.apk to .deployment/mobile"
cp epione.apk ../../webapp/.deployment/mobile/epione.apk
