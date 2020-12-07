import {input} from './input';
import {processBags, processBagsContent} from './processBags';
import {BagDescription} from './BagDescription';

// const input = `light red bags contain 1 bright white bag, 2 muted yellow bags.
// dark orange bags contain 3 bright white bags, 4 muted yellow bags.
// bright white bags contain 1 shiny gold bag.
// muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
// shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
// dark olive bags contain 3 faded blue bags, 4 dotted black bags.
// vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
// faded blue bags contain no other bags.
// dotted black bags contain no other bags.`;

console.log(`--- Day 7, part 1: Handy Haversacks ---`, input);

const output = input.split('\n')
    .filter(value => !!value)
    .map(processBags)
    .map(processBagsContent)
    .filter(bag => bag.type !== 'shiny gold')
    .filter(getBagsContainShinyGoldBag)

// console.log(`--- output ---`, JSON.stringify(output, null, 2));
console.log(`--- output ---`, output.length);

function getBagsContainShinyGoldBag(bag: BagDescription): boolean {
    return bag.type === 'shiny gold' || (bag.content || []).some(getBagsContainShinyGoldBag);
}
