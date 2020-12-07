import {BagDescription} from './BagDescription';

export function processBags(bag: string): BagDescription {
    const [main, content] = bag.split(' bags contain ');

    console.log(main)

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

function fillContent(bag: BagDescription, list: BagDescription[]) {
    const {amount, type} = bag;
    const found = list.find(b => b.type === type);

    if(!found) {
        throw Error('Missing bag description');
    }

    const content: BagDescription[] = (found.content || []).map(b => fillContent(b, list));

    return {amount, type, content};
}

export function processBagsContent(bag: BagDescription, index: number, self: BagDescription[]): BagDescription {
    bag.content = (bag.content || []).map(bag => fillContent(bag, self));

    return bag;
}
