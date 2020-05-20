let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "dan", age: 17, teachPrograming() {} },
        {name:"あっちゃん",age: 37,techHistrory(){}}
      ],
      teach() {}
    },

    entertainment: {
      youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
      makeSmile(){}
    }
  },
  plan() { },
  uploadVideo(){}
}

// youtuberのdanの「name」を取得
youtuber.list.business.youtuber[0].name;
// youtuberのplanメソッドを取得
youtuber.plan();
