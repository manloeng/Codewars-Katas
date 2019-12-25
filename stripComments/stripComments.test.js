const stripCommentAtMarker = require('./stripComment')

describe('stripCommentAtMarker', () => {
  test('expects an empty string to be return when there are no markers or inputs', ()=> {
    const input = ''
    const marker = []
    const result = stripCommentAtMarker(input, marker)
    expect(result).toEqual('')
  })
  test('expects the same string to be return when there are no markers', ()=> {
    const input = 'apples'
    const marker = []
    const result = stripCommentAtMarker(input, marker)
    expect(result).toEqual('apples')
  })
  test('expects only apples to be return when there is a matching markers', ()=> {
    const input = 'apples # pears'
    const marker = ['#']
    const result = stripCommentAtMarker(input, marker)
    expect(result).toEqual('apples')
  })
  test('expects "apples, pears" to be return when there is 2 matching markers', ()=> {
    const input = 'apples, pears # and !apples"'
    const marker = ["#", "!"]
    const result = stripCommentAtMarker(input, marker)
    expect(result).toEqual('apples, pears')
  })
  test('expects the string to not strip string at "\n" but at its markers', ()=> {
    const input = 'apples, pears # and bananas\ngrapes\nbananas !apples"'
    const marker = ["#", "!"]
    const result = stripCommentAtMarker(input, marker)
    expect(result).toEqual('apples, pears\ngrapes\nbananas')
  })
});