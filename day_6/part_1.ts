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
// a
// a
// a
// a
//
// b`;

console.log('--- Day 6, part 1: Custom Customs ---', input);

const output = input.split('\n\n')
    .map(answers => {
        return answers
            .replace(/\n/g, '')
            .split('')
            .filter((value, index, self) => self.indexOf(value) === index);
    })
    .map(answers => answers.length)
    .reduce((acc, answer) => acc + answer, 0);


console.log('--- output ---', output);
