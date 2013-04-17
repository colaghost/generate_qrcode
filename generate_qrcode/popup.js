chrome.tabs.query({'active': true}, function(tabs) {
    document.write("<img src=\"https://chart.googleapis.com/chart?cht=qr&chs=200x200&choe=UTF-8&chld=L|4&chl=" + tabs[0].url + "\">");
});
