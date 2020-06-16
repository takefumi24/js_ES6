/*
静的メソッドに触れてみよう
*/

'use strict';

{
  //以下のコードにshowInfo()という静的メソッドを追加する

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }

    //コンソールにPost class version 1.0を表示するメソッド

  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
  ];

  //実装した静的メソッドを呼び出す

}