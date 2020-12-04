import {processPassports} from './processPassports';
import {Passport} from './Passport';
import {input} from './input';

// const input = `pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
// hcl:#623a2f
//
// eyr:2029 ecl:blu cid:129 byr:1989
// iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm
//
// hcl:#888785
// hgt:164cm byr:2001 iyr:2015 cid:88
// pid:545766238 ecl:hzl
// eyr:2022
//
// iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
// `;

const passportRequiredFields = {
    byr: isBirthYear, // (Birth Year)
    iyr: isIssueYear, // (Issue Year)
    eyr: isExpirationYear, // (Expiration Year)
    hgt: isHeight, // (Height)
    hcl: isHairColor, // (Hair Color)
    ecl: isEyeColor, // (Eye Color)
    pid: isPassportID, // (Passport ID)
};

console.log(`--- Day 4, part 1: Passport Processing ---\n`, input);

const output = processPassports(input)
    .filter(isValidPassport);

console.log('-- Output -- ', output.length);

function isValidPassport(passport: Passport) {
    return Object.entries(passportRequiredFields)
        .every(([key, test]) => {
            return test(passport[key]);
        });
}

// byr (Birth Year) - four digits; at least 1920 and at most 2002.
function isBirthYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 1920 && year <= 2002;
}

// iyr (Issue Year) - four digits; at least 2010 and at most 2020.
function isIssueYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 2010 && year <= 2020;
}

// eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
function isExpirationYear(value: string): boolean {
    const year = parseInt(value, 10);

    if (isNaN(year)) {
        return false;
    }

    return year >= 2020 && year <= 2030;
}

// hgt (Height) - a number followed by either cm or in:
// If cm, the number must be at least 150 and at most 193.
// If in, the number must be at least 59 and at most 76.
function isHeight(value: string): boolean {
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
function isHairColor(value: string): boolean {
    return /^#[0-9a-f]{6}$/g.test(value);
}

// ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
function isEyeColor(value: string): boolean {
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
function isPassportID(value: string): boolean {
    return /^\d{9}$/g.test(value);
}

