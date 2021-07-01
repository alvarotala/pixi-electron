// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1800,  // 720
    height: 1280, // 1280
    fullscreen: false,

    webPreferences: {
      preload: path.join(__dirname, 'bridge.js')
    }
  })

  // mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  /// test from ubunntu core..
  // mainWindow.loadURL('http://192.168.100.5:8080')

  /// test from my mac
  mainWindow.loadURL('http://localhost:8080/?2')

  /// Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => createWindow())

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
