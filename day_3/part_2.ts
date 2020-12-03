import {input} from './input';
import {processField} from './processField';
import {getNumberOfTrees} from './getNumberOfTrees';

// const input = `..##.......
// #...#...#..
// .#....#..#.
// ..#.#...#.#
// .#...##..#.
// ..#.##.....
// .#.#.#....#
// .#........#
// #.##...#...
// #...##....#
// .#..#...#.#`;

console.log(`--- Day 3, part 1: Toboggan Trajectory ---\n`, input);

const output = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]]
    .map(([numberOfRightSteps, numberOfDownSteps]) => getNumberOfTrees(processField(input, numberOfRightSteps), numberOfRightSteps, numberOfDownSteps))
    .reduce((acc, value) => acc * value, 1);

console.log('-- Output -- ', output);
