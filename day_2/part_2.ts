import {input} from './input';
import {PasswordPolicy} from './PasswordPolicy';
import {processInput} from './processInput';

// const input: string[] = [
//     '1-3 a: abcde',
//     '1-3 b: cdefg',
//     '2-9 c: ccccccccc'
// ];

console.log(`--- Day 2, part 2: Password Philosophy ---\n`, input);

const output = input.map(processInput)
    .filter(isValidPassword);

console.log('-- Output -- ', output.length);

function isValidPassword({password, policy}: PasswordPolicy): boolean {
    const lowestLetter = password.substr(policy.lowest - 1, 1);
    const highestLetter = password.substr(policy.highest - 1, 1);

    return (lowestLetter === policy.letter && highestLetter !== policy.letter) || (lowestLetter !== policy.letter && highestLetter === policy.letter);
}
