import 'whatwg-fetch'
function urlString( obj ) {
  return '?'+Object.keys(obj).map(k => k + '=' + encodeURIComponent(obj[k])).join('&')
}
function makeParameters(method){
  return {
    method: method
  }
}
export function getImage(url, query = {}, callback){
  // Get Image as blob URL
  url = Object.keys(query).length ? url + urlString(query) : url;
  fetch(url, makeParameters("get")).then(function(response) {
        return response.blob();
      }).then(function(myBlob) {
        var objectURL = URL.createObjectURL(myBlob);
        callback(objectURL)
      });
}
