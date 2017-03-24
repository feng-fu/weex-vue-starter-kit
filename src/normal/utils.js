const stream = weex.requireModule('stream')

function GetData (url, body, callback) {
  stream.fetch({
    url: url,
    method: "GET",
    type: "json",
    body: body
  }, callback)
}

function PostData (url, body, callback) {
  stream.fetch({
    url: url,
    method: "POST",
    type: "json",
    body: body
  }, callback)
}