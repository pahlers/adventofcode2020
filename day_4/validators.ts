export function isRequired(value: string): boolean {
    return !!value;
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
export function isBirthYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 1920 && year <= 2002;
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
export function isIssueYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 2010 && year <= 2020;
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
export function isExpirationYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 2020 && year <= 2030;
}

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
export function isHeight(value: string): boolean {
    const {heightAsString, units} = (/^(?<heightAsString>\d*)(?<units>cm|in)$/ig.exec(value) || {}).groups || {};

    const height = parseInt(heightAsString, 10);

    if (isNaN(height)) {
        return false;
    }

    if (units === 'cm') {
        return height >= 150 && height <= 193;

    } else if (units === 'in') {
        return height >= 59 && height <= 76;
    }

    return false;
}

// hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
export function isHairColor(value: string): boolean {
    return /^#[0-9a-f]{6}$/g.test(value);
}

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
export function isEyeColor(value: string): boolean {
    return [
        'amb',
        'blu',
        'brn',
        'gry',
        'grn',
        'hzl',
        'oth',
    ].includes(value);
}

// pid (Passport ID) - a nine-digit number, including leading zeroes.
export function isPassportID(value: string): boolean {
    return /^\d{9}$/g.test(value);
}
