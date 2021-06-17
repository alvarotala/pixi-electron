
Build (Ubuntu server / desktop)

-----------------------------------

$ sudo apt update
$ sudo apt upgrade

- install nodejs (v.16.X) with npm
$ sudo apt-get install curl
$ curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

$ sudo apt-get install nodejs

$ npm install --save-dev electron-builder

- lxd: https://snapcraft.io/docs/build-on-lxd
$ export SNAPCRAFT_BUILD_ENVIRONMENT=lxd

$ sudo snap install snapcraft --classic

- Compile project to ./dist directory.

$ npm run dist
