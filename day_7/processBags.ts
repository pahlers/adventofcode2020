import {BagDescription} from './BagDescription';

export function processBags(input: string): BagDescription[]{
 return input.split('\n') // Spit into rows
     .filter(value => !!value) // Filter empty rows
     .map(processBag) // Process the bags
     .map(processBagContent); // Process content of the bags
}

function processBag(value: string): BagDescription {
    const [main, content] = value.split(' bags contain '); // Split value in main and content part

    // Create a bag
    return {
        amount: 1,
        type: main,
        content: content.split(', ')
            .reduce((acc: BagDescription[], bag) => {
                if (bag === 'no other bags.') {
                    return acc;
                }

                const subBag = (/(?<amount>\d*) (?<type>[\w ]*) bag/g.exec(bag) || {}).groups || {};

                return [...acc, {
                    amount: parseInt(subBag.amount, 10),
                    type: subBag.type
                }];
            }, [])
    }
}

function processBagContent(bag: BagDescription, index: number, self: BagDescription[]): BagDescription {
    return {...bag, content: (bag.content || []).map(bag => getBagContent(bag, self))};
}

function getBagContent(bag: BagDescription, list: BagDescription[]): BagDescription {
    const {amount, type} = bag;
    const found = list.find(b => b.type === type);

    if(!found) {
        throw Error('Missing bag description');
    }

    const content: BagDescription[] = (found.content || []).map(b => getBagContent(b, list));

    return {amount, type, content};
}
