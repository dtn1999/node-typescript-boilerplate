import addition from '../src/index';

describe('Test if configuration works',()=>{
    
    beforeAll(()=>{
        console.log("----------- Tests are looding ----------------")
    })

    afterAll(()=>{
        console.log("----------- Tests are completed ----------------")
    })

    test('Function addion',()=>{
        const result = addition(2,4);
        expect(result).toBe(2+4);
    })
})