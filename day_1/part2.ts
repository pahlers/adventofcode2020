import {multiplyValues} from './multiplyValues';
import {input} from './input';
import {is2020} from './is2020';

// // Example values
// const input = [
//     1721,
//     979, // *
//     366, // *
//     299,
//     675, // *
//     1456,
// ]

console.log(`--- Day 1, part 2: Report Repair ---\n`, input);

// @ts-ignore
let output: number[] = input
    .reduce(getCombinations, [])
    .map(multiplyValues);

console.log('-- Output -- ', output);

function getCombinations(acc: number[][], firstValue: number, index: number, self: number[]) {
    // get second number
    const combinations = self
        .slice(index) // don't search before, because you already done that part.
        .reduce((acc2: number[][], secondValue: number, index: number, self: number[]) => {
            // get third number
            const otherOtherValue = self
                .slice(index) // don't search before, because you already done that part.
                .find((thirdValue: number) => is2020(firstValue, secondValue, thirdValue));

            if (otherOtherValue) {
                return [...acc2, [firstValue, secondValue, otherOtherValue]];
            }

            return acc2;
        }, []) // filter combinations for 2020

    return [...acc, ...combinations];
}

