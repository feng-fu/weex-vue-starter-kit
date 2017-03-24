const stream = weex.requireModule('stream')
const header = {'DAIWAN-API-TOKEN': '78710-B0810-777C7-C9A85'}

exports.GetData = function (url, body, callback) {
  stream.fetch({
    url: url,
    method: "GET",
    type: "json",
    headers: header,
    body: body
  }, callback)
}

exports.PostData = function (url, body, callback) {
  stream.fetch({
    url: url,
    method: "POST",
    headers: header,
    type: "json",
    body: body
  }, callback)
}