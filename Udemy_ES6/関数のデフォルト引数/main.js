//ES5
function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET'
  }

  //ajaxリクエストをするロジックがここにあると想定
  return method;
}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');

  //ES6 引数で渡されるmethodにデフォルトで GETを定義
function makeAjaxRequest(url, method='GET') {
  //ajaxリクエストをするロジックがここにあると想定
  return method;
}

makeAjaxRequest("google.com",null);
makeAjaxRequest("google.com", "POST");
