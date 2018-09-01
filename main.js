const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow} = electron;

let mainWindow;

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 250,
        height: 150,
        transparent: true,
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol:'file:',
    slashes: true 
    }));
});

