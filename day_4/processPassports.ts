import {Passport} from './Passport';

export function processPassports(input: string): Passport[] {
    return input.split('\n')
        .reduce(processInput, {buffer: [], list: []})
        .list
        .reduce(processFields, []);
}

function processInput(acc: { buffer: string[], list: string[][] }, value: string, index: number, self: string[]) {
    if (value === '') {
        // write buffer and start new buffer
        acc.list = [...acc.list, acc.buffer];
        acc.buffer = [];

    } else {
        // fill buffer
        acc.buffer = [...acc.buffer, value];

        if (index === self.length - 1) {
            // last row from input, write buffer
            acc.list = [...acc.list, acc.buffer];
        }
    }

    return acc;
}

function processFields(acc: Passport[], rows: string[]) {
    const passport = rows.join(' ')
        .split(' ')
        .map(field => field.split(':'))

    return [...acc, Object.fromEntries(passport)];
}
