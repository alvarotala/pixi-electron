const { contextBridge } = require('electron')
const fs = require('fs')

// window.addEventListener('DOMContentLoaded', () => {
//   console.log("ELECTRON :::::::::");
//   console.log(process);
// });



const rfile = (path, callback) => {
  fs.readFile(path, 'utf8' , (err, data) => {
    if (err) {
      callback(false, err);
      return
    }
    callback(true, data);
  });
};

const wfile = (path, data, options, onerror) => {
  fs.writeFile(path, data, options, (err) => {
    if (err && onerror) {
      console.error(err);
      onerror(err);
    }
  });
};



contextBridge.exposeInMainWorld('electron', {
  file: { read: rfile, write: wfile },

  foo: null
});
