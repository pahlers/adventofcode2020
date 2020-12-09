import {input} from './input';

console.log(``, input);

const output = input.split('\n')
    .filter(value => !!value)
    .map(value => parseInt(value, 10));

console.log(`--- output ---`, output);
