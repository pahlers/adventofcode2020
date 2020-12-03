export function is2020(...args: number[]): boolean {
    return args.reduce((acc, value) => acc + value, 0) === 2020;
}
