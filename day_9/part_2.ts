import {input} from './input';
import {calculateFaultFix, generateFaultReport, processTransmission} from './processTransmission';

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

console.log(`--- Day 9, part 2: Encoding Error ---`, input, preamp);

const numbers = processTransmission(input);

const faultReport = generateFaultReport(numbers, preamp);

const fix = calculateFaultFix(numbers, faultReport);

console.log(`--- output ---`, faultReport.faultIndex, faultReport.faultValue, fix, Math.min(...fix) + Math.max(...fix));
