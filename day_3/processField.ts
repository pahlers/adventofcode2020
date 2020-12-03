export function processField(input: string, numberOfRightSteps = 3): boolean[][] {
    const rows = input.split('\n') // Make rows
        .filter(row => !!row); // remove empty rows

    const minimumNumberOfColumns = Math.ceil(rows.length / rows[0].length) * numberOfRightSteps;

    return rows.map(row => row.repeat(minimumNumberOfColumns)) // Multiply data so we don't have to worry about boundaries
        .map(row => row.split('')) // Split the letters
        .map(row => row.map(tree => tree === '#'));  // Make booleans
}
