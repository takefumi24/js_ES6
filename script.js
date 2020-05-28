"use strict";

{
  class Post{
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text}-${this.likeCount}イイね`);
    }

    like(){
      this.likeCount++;
      this.show();
    }

  }
  class SponsoredPost extends Post{
    constructor(text, sponsor) {
      super(text);
      this.sponsor = sponsor
    }

    show() {
      super.show();
      console.log(`..sponsored by ${this.sponsor}`);
    }

  }

  const posts = [
    new Post("おはようございます"),
    new Post("今日も１日積み上げます！！"),
    new SponsoredPost('1日を有意義に過ごそう！！', 'Filppy')
  ];

  posts[2].show();
  posts[2].like();

}
