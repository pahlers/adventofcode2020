import {input} from './input';
import {generateFaultReport, processTransmission} from './processTransmission';

// const input = `
// 35
// 20
// 15
// 25
// 47
// 40
// 62
// 55
// 65
// 95
// 102
// 117
// 150
// 182
// 127
// 219
// 299
// 277
// 309
// 576`;

const preamp = 25;

console.log(`--- Day 9, part 1: Encoding Error ---`, input, preamp);

const numbers = processTransmission(input);

const faultReport = generateFaultReport(numbers, preamp);

console.log(`--- output ---`, faultReport.faultIndex, faultReport.faultValue);
