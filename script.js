// アロー関数を使ってリファクタリングしてみる
const team = {
  members: ['太郎', '花子'],
  teamName: 'スーパーチーム',
  teamSummary: function () {
    return this.members.map((member)=> {
      return `${member}は${this.teamName}の所属です}`;
    });
  }
};
