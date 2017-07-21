
/**
 * webSocketFront.js
 *
 *
 * 목 적 : Electron 내부에서 동작하는 WebSocket 서버의 상태값를 Front로 제공
 * 진 행 : socket 통신 방안 구상중
 * 문 제 : Electron 내부에서 동작하는 WebSocket 서버의 상태값을 Front로 전달할 방법 (Electron 자체 모듈 ipc 이용)
 * 일 자 : 2017.07.20
 * 작 성 : Supermoon
 */


// 비동기 테스트

const ipc = require('electron').ipcRenderer;
const asyncMsgBtn = document.getElementById('async-msg');

asyncMsgBtn.addEventListener('click', function () {
    ipc.send('asynchronous-message', 'ping')
})

ipc.on('asynchronous-reply', function (event, arg) {
    const message = `Asynchronous message reply: ${arg}`
    document.getElementById('server-status').append(message + '\n')
});

// 동기 테스트

const syncMsgBtn = document.getElementById('sync-msg');

syncMsgBtn.addEventListener('click', function () {
    const reply = ipc.sendSync('synchronous-message', 'ping')
    const message = `Synchronous message reply: ${reply}`
    document.getElementById('server-status').append(message + '\n')
})

// serial test

// Error
const serialport = require('serialport')
