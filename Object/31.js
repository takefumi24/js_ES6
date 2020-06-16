/*
クラスを作ってみよう
*/

'use strict';

{
  //以下のコードをクラスとインスタンスを使ってコードを書き換えよう

  const posts = [
    {
      text: 'JavaScriptの勉強中…',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
    {
      text: 'プログラミング楽しい！',
      likeCount: 0,
      show() {
        console.log(`${this.text} - ${this.likeCount}いいね`);
      },
    },
  ];

  posts[0].show();
  posts[1].show();
}