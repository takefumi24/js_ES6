"use strict";

{
  class Post{
    constructor(text) {
      this.text = text;
      this.likecount = 0;
    }

    show() {
      console.log(`${this.text}-${this.likecount}イイね`);
    }
  }

  const posts = [
    new Post("おはようございます"),
    new Post("今日も１日積み上げます！！"),
  ];

  posts[0].show();
  posts[1].show();

}
