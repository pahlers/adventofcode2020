import {Instruction} from './Instruction';

/**
 * Returns 'acc', -1 when loop is detected
 * @param acc
 * @param index
 * @param instructions
 * @param loopDetection
 */
export function calculateAccumulator(acc: number, index: number, instructions: Instruction[], loopDetection: number[] = []): number {
    if (loopDetection.includes(index)) {
        console.log('Loop detected, return -1', index);

        return -1;
    }

    loopDetection = [...loopDetection, index];

    const instruction: Instruction = instructions[index];

    if (instruction === undefined) {
        console.log('Program terminates');

        return acc;
    }

    switch (instruction.operation) {
        case 'nop':
            return calculateAccumulator(acc, index + 1, instructions, loopDetection);

        case 'acc':
            acc += instruction.argument;

            return calculateAccumulator(acc, index + 1, instructions, loopDetection);

        case 'jmp':
            return calculateAccumulator(acc, index + instruction.argument, instructions, loopDetection);

        default:
            throw Error('Unknown operation');
    }
}
