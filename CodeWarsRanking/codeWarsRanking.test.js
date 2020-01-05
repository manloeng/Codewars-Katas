const user = require('./codeWarsRanking')

describe('user', () => {
  test("Expects user's rank to be -8 when passed with 0 points", ()=>{
    const input = 0
    user.incProgress(input)
    const rank = user.rank
    expect(rank).toEqual(-8)
  })
});