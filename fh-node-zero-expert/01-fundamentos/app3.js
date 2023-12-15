const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf8');

const wordsCount = content.split(' ')

const reactwordsCount = wordsCount.filter(w => w.toLocaleLowerCase().includes('react')).length

const reactwordsCountRegex = content.match(/react/gi).length

console.log('Palabras: ', wordsCount.length)
console.log('Palabras React: ', reactwordsCount)
console.log('Palabras React Regex: ', reactwordsCountRegex)