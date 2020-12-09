export function processTransmission(input: string): number[] {
    return input.split('\n')
        .filter(value => !!value)
        .map(value => parseInt(value, 10));
}

export interface FaultReport {
    faultIndex: number,
    faultValue: number,
    cache: number[]
}
export function generateFaultReport(numbers: number[], preamp: number): FaultReport {
    return numbers.reduce((acc: FaultReport, value, index) => {
        let {faultIndex, faultValue, cache} = acc;

        if (index >= preamp) {
            if (!cache.some(v => cache.some(v2 => (v !== v2) && (v + v2) === value))) {
                faultIndex = index;
                faultValue = value;
            }
        }

        if (cache.length === preamp) {
            [, ...cache] = cache;
        }

        cache = [...cache, value];

        return {faultIndex, faultValue, cache};
    }, {faultIndex: -1, faultValue: -1, cache: numbers.slice(0, preamp)});
}

export function calculateFaultFix(numbers: number[], {faultIndex, faultValue}: FaultReport) {
    return numbers.slice(0, faultIndex - 1)
        .reduce((acc: number[], value, index, self: number[]) => {
            const {found} = self.slice(index)
                .reduce((acc: { found: number[], cache: number[] }, value) => {
                    let {found, cache} = acc;
                    cache = [...cache, value];

                    const sum = cache.reduce((a, v) => a + v, 0);

                    if (sum === faultValue) {
                        found = cache;
                    }

                    return {found, cache};
                }, {found: [], cache: []});

            if (found.length > 0) {
                return found;
            }

            return acc;
        }, []);
}
