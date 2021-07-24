function copy() {
    var copyText = document.querySelector("#input");
    copyText.select();
    document.execCommand("copy");
  }
  
  browser.alarms.create({
    delayInMinutes: 0.1
  });
  
  browser.alarms.onAlarm.addListener(copy);



