/**
 * indexListener.js
 *
 * 목 적 : index.html와 통신하기 위한 Electron Communication Listener
 * 문 제 :
 * 일 자 : 2017.07.20
 * 작 성 : SuperMoon
 */

const ipc = require('electron').ipcMain;

// 비동기

ipc.on('asynchronous-message', function (event, arg) {
    event.sender.send('asynchronous-reply', 'pong')
});

// 동기

ipc.on('synchronous-message', function (event, arg) {
    event.returnValue = 'pong'
});