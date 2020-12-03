export interface PasswordPolicy {
    password: string;
    policy: {
        lowest: number;
        highest: number;
        letter: string;
    };
}
