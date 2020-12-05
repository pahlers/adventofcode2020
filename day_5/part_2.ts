import {input} from './input';
import {Boardingpass} from './Boardingpass';
import {processBoardingpasses} from './processBoardingpasses';

// const input = `
// FBFBBFFRLR
// BFFFBBFRRR
// FFFBBBFRRR
// BBFFBBFRLL
// `;

console.log(`--- Day 5, part 2: Binary Boarding ---\n`, input);

const output = processBoardingpasses(input)
    .sort(compareBoardingpasses)
    .find((boardingpass, index, self) => {
        const nextBoardingpass = self[index + 1];

        return boardingpass.seatID !== nextBoardingpass.seatID - 1;
    });


if (output) {
    console.log('-- Output -- ', output.seatID + 1);

} else {
    console.log('-- Output -- No boardingpasses missing');
}


function compareBoardingpasses(firstBoardingpass: Boardingpass, secondBoardingpass: Boardingpass): number {
    if (firstBoardingpass.seatID < secondBoardingpass.seatID) {
        return -1;
    }
    if (firstBoardingpass.seatID > secondBoardingpass.seatID) {
        return 1;
    }

    return 0;
}
