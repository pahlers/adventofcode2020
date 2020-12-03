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

const output = getNumberOfTrees(processField(input), 3);

console.log('-- Output -- ', output);
