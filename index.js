// Modules to control application life and create native browser window
const {app, BrowserWindow} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 720,
    height: 1280,
    fullscreen: true,

    webPreferences: {
      // preload: path.join(__dirname, 'src', 'js', 'main.js')
    }
  })

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
}

app.whenReady().then(() => createWindow())

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
