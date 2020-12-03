export function getNumberOfTrees(rows: boolean[][], numberOfRightSteps: number, numberOfDownSteps = 1): number {
    return rows.reduce((acc, row, index) => {
        if(index % numberOfDownSteps !== 0) {
            return acc;
        }

        if (row[acc.position] === undefined) {
            throw new Error('Missing columns!!!');
        }

        if (row[acc.position]) {
            acc.trees += 1;
        }

        acc.position += numberOfRightSteps;

        return acc;
    }, {
        position: 0,
        trees: 0
    })
        .trees;
}
