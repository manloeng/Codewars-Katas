function stripCommentAtMarker(input, markers) {
  return newString(input, markers)
};

module.exports =  stripCommentAtMarker

function returnMessageifBaseValid (input){
  if (!input) return ''
}

function returnMessageifMarkersValid (input, markers){
  if (!markers.length) return input
}

function createRegexMarker(markers){
  const markersString =  markers.join('')
  const regexPattern = `[${markersString}]`
  const regexMarker = new RegExp(regexPattern, 'g');

  return regexMarker
}

function createNewSentenceArray(input){
  const splitSentenceArray = input.split('\n')
  return splitSentenceArray
}

function createNewStringArray(newSentenceArray, regexMarker){
  const newStringArray = newSentenceArray.map(senetence => {
    const newString = createNewString(senetence, regexMarker)
    return newString
  })

  return newStringArray
}

function createNewString(input, regexMarker){
  const splitStringArray = input.split(' ')
  const splitStringArrayLength = splitStringArray.length
  const newStringArray = []

  for (let i = 0; i < splitStringArrayLength; i++){
    const currentString = splitStringArray[i]
    const isStringMatch = regexMarker.test(currentString)
    if (isStringMatch){
      break
    }
    newStringArray.push(currentString)
  }

  return newStringArray.join(' ').trim()
}

function newString(input, markers){
  returnMessageifBaseValid(input)
  returnMessageifMarkersValid(input , markers)
  
  const newSentenceArray = createNewSentenceArray(input)
  const regexMarker = createRegexMarker(markers)
  const newStringArray = createNewStringArray(newSentenceArray, regexMarker)

  const newString = newStringArray.join('\n')
  return newString
}