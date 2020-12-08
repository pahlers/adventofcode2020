import {processInstructions} from './processInstructions';
import {input} from './input';
import {calculateAccumulator} from './calculateAccumulator';
import {Instruction} from './Instruction';

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

const instructions = processInstructions(input);

let output = calculateAccumulator(0, 0, instructions, []);

// Apply fix and run it again
let fixIndex = -1;

while (output === -1) {
    let fixedInstructions;

    [fixedInstructions, fixIndex] = fixInstructions(instructions, fixIndex);

    output = calculateAccumulator(0, 0, fixedInstructions, []);
}

console.log(`--- output ---`, output);

function fixInstructions(instructions: Instruction[], fixIndex: number): [Instruction[], number] {
    let hasFix = false;

    const fixedInstructions = [...instructions].map((instruction, index) => {
        if (!hasFix && index > fixIndex) {
            if (instruction.operation === 'jmp') {
                fixIndex = index;
                hasFix = true;

                return {...instruction, operation: 'nop'};
            }

            if (instruction.operation === 'nop') {
                fixIndex = index;
                hasFix = true;

                return {...instruction, operation: 'jmp'};
            }
        }

        return instruction;
    });

    return [fixedInstructions, fixIndex];
}
