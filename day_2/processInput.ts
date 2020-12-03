import {PasswordPolicy} from './PasswordPolicy';

export function processInput(value: string): PasswordPolicy {
    const {
        lowest,
        highest,
        letter = '',
        password = ''
    } = (/^(?<lowest>\d*)-(?<highest>\d*) (?<letter>\w*): (?<password>\w*)$/.exec(value) || {}).groups || {};

    return {
        password,
        policy: {
            lowest: parseInt(lowest, 10),
            highest: parseInt(highest, 10),
            letter
        }
    }
}
