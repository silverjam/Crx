#!/bin/bash

Z=../crx_gallery_pkg.zip

echo -n 'Removing: '
rm -vrf pkg
mkdir pkg
cp -v background.html pkg
cp -v blip_cs_acty.js pkg
cp -v icon-128.png pkg
cp -v icon-48.png pkg
cp -v jquery-1.4.1.min.js pkg
cp -v jquery-ui-1.8.5.custom.css pkg
cp -v jquery-ui-1.8.5.custom.min.js pkg
cp -v jquery-watch-plugin-1.2.0.js pkg
cp -v manifest.json pkg
cp -v options.html pkg
cp -v options.js pkg
pushd pkg
echo -n 'Removing: '
rm -v $Z
echo 'Zipping:'
zip -r $Z .
popd

