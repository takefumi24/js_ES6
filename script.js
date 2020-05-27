"use strict";

{
  const posts = [
    {
      text: "おはようございます",
      likecount: 0,
      show() {
        console.log(`${this.text}-${this.likecount}イイね`);
      },
    },
    {
      text: "今日も１日積み上げます！！",
      likecount: 0,
      show() {
        console.log(`${this.text}-${this.likecount}イイね`);
      },
    },
  ];

  // show(posts[0]);
  posts[0].show();
  posts[1].show();

}
