import { getAge } from "../../src/plugins/get-age.plugin";

describe('plugins/get-age.plugin.ts', () => {

    test('getAge() should return the age of a person', () => {
        const birthdate = '1982-01-01';
        const age = getAge(birthdate)

        expect(typeof age).toBe('number')
    })

    test('getAge should return current age', () => {
        const birthdate = '2020-01-01';
        const age = getAge(birthdate);

        const calculatedAge = new Date().getFullYear()  - (new Date(birthdate).getFullYear() +1)

        expect(age).toBe(calculatedAge)
    })

});