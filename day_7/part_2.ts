import {input} from './input';
import {processBags, processBagsContent} from './processBags';
import {BagDescription} from './BagDescription';

// const input = `shiny gold bags contain 2 dark red bags.
// dark red bags contain 2 dark orange bags.
// dark orange bags contain 2 dark yellow bags.
// dark yellow bags contain 2 dark green bags.
// dark green bags contain 2 dark blue bags.
// dark blue bags contain 2 dark violet bags.
// dark violet bags contain no other bags.`;

console.log(`--- Day 7, part 2: Handy Haversacks ---`, input);

const output = input.split('\n')
    .filter(value => !!value)
    .map(processBags)
    .map(processBagsContent)
    .filter(bag => bag.type === 'shiny gold')
    .map(getNumberOfBags)
    .map(bagAmount => bagAmount - 1);

console.log(`--- output ---`, JSON.stringify(output, null, 2));
// console.log(`--- output ---`, output);

function getNumberOfBags(bag: BagDescription): number {
    return (bag.amount * (bag.content || []).reduce((acc, b) => acc + getNumberOfBags(b), 1));
}

