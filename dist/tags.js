
riot.tag2('test', '<h3>{test}</h3>', '', '', function(opts) {
"use strict";

var _this = this;

var type = 'JavaScript';
this.test = "This is " + type;

this.myWait = async function (delay) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      return resolve();
    }, delay);
  });
};

this.hoge = async function () {
  console.log("hoge started.");
  await _this.myWait(4000);
  _this.test = "a";
  console.log("hoge stopped.");
};

this.hoge();
});