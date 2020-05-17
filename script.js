const testingTeam = {
  lead:'典子',
  tester: '隆',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.tester;
  }

}

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: '開発部',
  lead: '太郎',
  manager: 'ゆり',
  engineer: '次郎',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;

  }
};

// function* TeamIterator(team) {
//   yield team.lead;
//   yield team.manager;
//   yield team.engineer;
//   yield* team.testingTeam;
// };

// function* TestingTeamIterator(team) {
//   yield team.lead;
//   yield team.tester;
// }

const names = []
for (let name of engineeringTeam) {
  names.push(name);
}
console.log(names);
