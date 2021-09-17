var ANIMATIONS = { 'custom': CUSTOM };

var textarea = document.getElementById('textarea');
var startBtn = document.getElementById('start');
var stopBtn = document.getElementById('stop');

startBtn.onclick = function() { start() };
stopBtn.onclick = function() { stop() };

var lists;
var current = 0;
var speed = 250;
var custom = true;

timer = null;

function config() {
    lists = ANIMATIONS['custom'].split('=====');
    current = 0;
    end = lists.length;
    if (end > 0)
        set();
    else stop();
}

function set() {
    textarea.value = lists[current];
    if (current + 1 > end - 1) current = 0;
    else current++;
}

function start() {
    config();

    timer = setInterval(set, speed);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stop() {
    if (timer != null) {
        clearInterval(timer);
        timer = null;
    }
    startBtn.disabled = false;
    stopBtn.disabled = true;
}