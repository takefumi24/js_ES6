/*
カプセル化に触れてみる
*/

'use strict';

{
  //以下のコードにlikeメソッドを追加してlikeCountを増やす

  class Post {
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount}likes`);
    }
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
  ];

  posts[0].like();//この呼び出しだけでコンソールに処理結果が表示されるように実装する

}