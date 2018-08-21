exports.install = function(Vue, options) {
  // 两数之间随机整数，参数（最小值，最大值）
  Vue.prototype.randomInt = function(minNum, maxNum) {
    switch (arguments.length) {
      case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
      case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
      default:
        return 0;
        break;
    }
  }
  // 两数之间随机小数，参数（最小值，最大值，小数点后位数）
  Vue.prototype.randomDec = function(minNum, maxNum, digit) {
    let _digit = 1;
    for(let i = 0;i < digit;i++){
      _digit += "0";
    }
    _digit = parseInt(_digit)
    return Math.round((Math.random() * (maxNum - minNum) + minNum) * _digit) / _digit;
  }
  // 当前时间14位字符串
  Vue.prototype.currentTimeSub14 = function() {
    let myDate = new Date();
    myDate.getYear(); //获取当前年份(2位)
    let year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
    myDate.getMonth(); //获取当前月份(0-11,0代表1月)
    let month = myDate.getMonth() + 1 > 10 ? myDate.getMonth() + 1 : 0 + "" + (myDate.getMonth() + 1)
    myDate.getDate(); //获取当前日(1-31)
    let date = myDate.getDate() > 10 ? myDate.getDate() : 0 + "" + myDate.getDate()
    myDate.getDay(); //获取当前星期X(0-6,0代表星期天)
    myDate.getTime(); //获取当前时间(从1970.1.1开始的毫秒数)
    myDate.getHours(); //获取当前小时数(0-23)
    let hours = myDate.getHours()
    myDate.getMinutes(); //获取当前分钟数(0-59)
    let minutes = myDate.getMinutes()
    myDate.getSeconds(); //获取当前秒数(0-59)
    let seconds = myDate.getSeconds() > 10 ? myDate.getSeconds() : "0" + myDate.getSeconds()
    myDate.getMilliseconds(); //获取当前毫秒数(0-999)
    myDate.toLocaleDateString(); //获取当前日期
    let mytime = myDate.toLocaleTimeString(); //获取当前时间
    myDate.toLocaleString(); //获取日期与时间
    // let DateTime = year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
    let DateTime = year + "" + month + "" + date + "" + hours + "" + minutes + "" + seconds + "" + "00";
    return DateTime;
  }
}
