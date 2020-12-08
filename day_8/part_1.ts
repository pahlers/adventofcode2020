import {processInstructions} from './processInstructions';
import {Instruction} from './Instruction';
import {input} from './input';


// const input = `nop +0
// acc +1
// jmp +4
// acc +3
// jmp -3
// acc -99
// acc +1
// jmp -4
// acc +6`;

console.log(`--- Day 8, part 1: Handheld Halting ---`, input);

const cleanInput = processInstructions(input)

const output = bootCodeReducer(0, 0, cleanInput, []);

console.log(`--- output ---`, output);

function bootCodeReducer(acc: number, index: number, instructions: Instruction[], loopDetection: number[] = []): number {
    if (loopDetection.includes(index)) {
        console.log('Loop detected!', index);

        return acc;
    }

    loopDetection = [...loopDetection, index];

    const instruction: Instruction = instructions[index];

    if(instruction === undefined){
        console.log('Program terminates');

        return acc
    }

    switch (instruction.operation) {
        case 'nop':
            return bootCodeReducer(acc, index + 1, instructions, loopDetection);

        case 'acc':
            acc += instruction.argument;

            return bootCodeReducer(acc, index + 1, instructions, loopDetection);

        case 'jmp':
            return bootCodeReducer(acc, index + instruction.argument, instructions, loopDetection);

        default:
            throw Error('Unknow operation');
    }
}
