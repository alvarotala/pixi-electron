// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,  // 720 // 1800
    height: 1280, // 1280
    fullscreen: false,

    webPreferences: {
      preload: path.join(__dirname, 'bridge.js')
    }
  });

  // mainWindow.loadFile('/home/alvarotala/cfdist/index.html');

  /// mainWindow.loadFile(path.join(__dirname, 'www', 'index.html'));

  /// test from ubuntu core..
  // mainWindow.loadURL('http://192.168.100.5:8080')

  /// test from my mac
  mainWindow.loadURL('http://localhost:8080/?2')

  /// Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => createWindow());

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
