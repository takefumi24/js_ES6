"use strict";

{
  const posts = [
    {
      text: "おはようございます",
      likecount: 0,
    },
    {
      text: "今日も１日積み上げます！！",
      likeCount: 0,
    },
  ];

  function show(post) {
    console.log(`${post.text}-${post.likecount}イイね`);
  }
  show(posts[0]);

}
