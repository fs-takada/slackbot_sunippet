// on google app script.
// incoming webhookでハロワをチャンネルに送る

function postMessage() {
  var url = "https://hooks.slack.com/services/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" //webhook url
  var payload = {
    "text": "hello world!"
  }

  var options = {
    "method": "POST",
    "payload" : JSON.stringify(payload),
    "headers": {
      "Content-type": "application/json",
    }
  }
  UrlFetchApp.fetch(url, options)
}
