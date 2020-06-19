/*
クラスの拡張に触れてみる

ここでは動画の内容を参考にコードを書き替えていってください
拡張する際に、どこに何の情報を追加すべきなのか？を意識してください
*/

'use strict';

{
  //PostをコピーしてSponsoredPostを生成する

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
  }

  const posts = [
    new Post('JavaScriptの勉強中…'),
    new Post('プログラミング楽しい！'),
  ];
}