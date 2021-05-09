const express = require('express');
const app = express();
const pty = require('node-pty');
const argv = require('yargs').argv;

var term = new Terminal();
term.open(document.getElementById('terminal'));
term.write('Hello $ ')

term.write("hahah")

/*
term.onData(e => {

})

var ptyProcess = pty.spawn(shell, [], {
  name: 'xterm-color',
  cols: 80,
  rows: 80,
  cwd: process.env.HOME,
  env: process.env
});

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

ptyProcess.on('data', function(data) {
  term.write(data);
});
*/
