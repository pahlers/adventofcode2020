import {input} from './input';

// const input = `abc
//
// a
// b
// c
//
// ab
// ac
//
// aa
// aa
// aa
// aa
//
// b`;

console.log('--- Day 6, part 2: Custom Customs ---', input);

function calculateNumberOfSimilarDeclarations(acc: number[], declarations: string[]) {
    const amount = declarations[0].split('')
        .filter((letter, index, self) => self.indexOf(letter) === index) // Remove double letters from declaration
        .map((letter): number => declarations.every(declaration => declaration.includes(letter)) ? 1 : 0) // Test if declaration is on every list
        .reduce((acc, amount) => acc + amount, 0);

    return [...acc, amount];
}

const output = input.split('\n\n')
    .map(declarations => declarations.split('\n') // split declarations
        .filter(answers => !!answers)) // remove empty declarations
    .reduce(calculateNumberOfSimilarDeclarations, [])
    .reduce((acc, answer) => acc + answer, 0);

console.log('--- output ---', output);
