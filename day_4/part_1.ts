import {processPassports} from './processPassports';
import {Passport} from './Passport';
import {input} from './input';
import {isRequired} from './validators';


// const input = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
// byr:1937 iyr:2017 cid:147 hgt:183cm
//
// iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
// hcl:#cfa07d byr:1929
//
// hcl:#ae17e1 iyr:2013
// eyr:2024
// ecl:brn pid:760753108 byr:1931
// hgt:179cm
//
// hcl:#cfa07d eyr:2025 pid:166559648
// iyr:2011 ecl:brn hgt:59in`;

const passportRequiredFields = {
    byr: isRequired, // (Birth Year)
    iyr: isRequired, // (Issue Year)
    eyr: isRequired, // (Expiration Year)
    hgt: isRequired, // (Height)
    hcl: isRequired, // (Hair Color)
    ecl: isRequired, // (Eye Color)
    pid: isRequired, // (Passport ID)
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
