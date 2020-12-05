import {input} from './input';
import {Boardingpass} from './Boardingpass';
import {processBoardingpasses} from './processBoardingpasses';

// const input = `
// FBFBBFFRLR
// BFFFBBFRRR
// FFFBBBFRRR
// BBFFBBFRLL
// `;

console.log(`--- Day 5, part 1: Binary Boarding ---\n`, input);

const output = processBoardingpasses(input)
    .reduce(getHighestSeatID, {seatID: 0} as Boardingpass)

console.log('-- Output -- ', output);

function getHighestSeatID(acc: Boardingpass, boardingpass: Boardingpass) {
    if (acc.seatID < boardingpass.seatID) {
        return boardingpass;
    }

    return acc;
}
