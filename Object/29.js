/*
オブジェクトのプロパティになっている関数（メソッド）をみていこう
*/

'use strict';

{
  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
    },
  ];

  //以下の関数をpostsのプロパティの値として扱えるように書き換える
  function show(post) {
    console.log(`${post.text} - ${post.likeCount}いいね`);
  }

  //showメソッドをオブジェクトから呼び出しコンソールに表示する

}