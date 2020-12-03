import {multiplyValues} from './multiplyValues';
import {input} from './input';
import {is2020} from './is2020';

// Example values
// const input = [
//     1721, // *
//     979, // *
//     366,
//     299,
//     675,
//     1456,
// ]

console.log(`--- Day 1, part 1: Report Repair ---\n`, input);

let output: number[] = input
    .reduce(getCombinations, [])
    .map(multiplyValues);

console.log('-- Output -- ', output);

function getCombinations(acc: number[][], firstValue: number, index: number, self: number[]) {
    const combinations = self
        .slice(index) // don't search before, because you already done that part.
        .filter(secondValue => is2020(firstValue, secondValue)) // filter combinations for 2020
        .map(otherValue => [firstValue, otherValue]); // map to a nice format

    return [...acc, ...combinations];
}
