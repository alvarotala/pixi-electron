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

const wfile = (path, data, options = {}) => {
  fs.writeFile(path, data, options, (err) => {
    if (err) console.error(err);
  });
};



contextBridge.exposeInMainWorld('electron', {
  file: { read: rfile, write: wfile },
  
  foo: null
});
