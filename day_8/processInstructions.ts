import {Instruction} from './Instruction';

export function processInstructions(input: string): Instruction[] {
    return input.split('\n')
        .filter(instruction => !!instruction)
        .map(instruction => instruction.split(' '))
        .map(([operation, argument]) => ({operation, argument: parseInt(argument, 10)}));
}
