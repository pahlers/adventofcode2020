import {Boardingpass} from './Boardingpass';

function convertToNumbers([row, column]: string[]): Boardingpass {
    const rowAsNumber = parseInt(row.replace(/B/g, '1').replace(/F/g, '0'), 2);
    const columnAsNumber = parseInt(column.replace(/L/g, '0').replace(/R/g, '1'), 2);
    const seatID = rowAsNumber * 8 + columnAsNumber;

    return {
        row: rowAsNumber,
        column: columnAsNumber,
        seatID
    };
}

export function processBoardingpasses(input: string): Boardingpass[] {
    return input.split('\n')
        .filter(boardingPass => !!boardingPass)
        .map(boardingPass => ([boardingPass.substr(0, 7), boardingPass.substr(7)]))
        .map(convertToNumbers);
}
