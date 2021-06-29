// IMPORT MODULES under test here:
 


import { isYes, isNo, isLastName, isAge, isCatOrDog, isPetName } from '/utils.js';

const test = QUnit.test;

test('should return for yes-y strings', assert => {
    const yesString = isYes('yes');
    const yString = isYes('y');
    const yasString = isYes('yas');
    assert.equal(yesString, true);
    assert.equal(yString, true);
    assert.equal(yasString, true);
});

test('should return for no-n strings', assert => {
    const yesString = isNo('no');
    const yString = isNo('n');
    const yasString = isNo('nah');
    assert.equal(yesString, true);
    assert.equal(yString, true);
    assert.equal(yasString, true);
});

test('should return for true for correct Last name', assert => {
    const lastNameString = isLastName('greathouse');
    
    assert.equal(lastNameString, true);
    
});

test('should return for true for age', assert => {
    const isAgeString = isAge('26');
    
    assert.equal(isAgeString, true);
});

test('should return for true for age', assert => {
    const isCatOrDogString = isCatOrDog('cat');
    
    assert.equal(isCatOrDogString, true);
});

test('should return for name of pet', assert => {
    const isPetNameString = isPetName('latte');
    
    assert.equal(isPetNameString, true);
});