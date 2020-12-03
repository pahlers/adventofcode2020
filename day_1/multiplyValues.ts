export function multiplyValues(values: number[]): number {
    return values.reduce((acc, value) => acc * value, 1);
}
