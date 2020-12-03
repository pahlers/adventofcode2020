import {input} from './input';
import {PasswordPolicy} from './PasswordPolicy';
import {processInput} from './processInput';

// const input: string[] = [
//     '1-3 a: abcde',
//     '1-3 b: cdefg',
//     '2-9 c: ccccccccc'
// ];

console.log(`--- Day 2, part 1: Password Philosophy ---\n`, input);

const output = input.map(processInput)
    .filter(isValidPassword);

console.log('-- Output -- ', output.length);

function isValidPassword({password, policy}: PasswordPolicy): boolean {
    const amount = Array.from(password)
        .filter(l => l === policy.letter)
        .length;

    return amount >= policy.lowest && amount <= policy.highest;
}
