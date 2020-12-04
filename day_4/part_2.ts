import {processPassports} from './processPassports';
import {Passport} from './Passport';
import {input} from './input';
import {
    isBirthYear,
    isExpirationYear,
    isEyeColor,
    isHairColor,
    isHeight,
    isIssueYear,
    isPassportID
} from './validators';

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
