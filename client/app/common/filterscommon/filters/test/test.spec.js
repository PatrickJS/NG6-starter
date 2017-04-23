import test from './test'

describe('Filter: test', () => {
  let filter;
  const testInputs = [
    { input: 'test input',  expected: 'TEST INPUT' },
    { input: 'Test Input',  expected: 'TEST INPUT' },
    { input: 'TEST INPUT',  expected: 'TEST INPUT' }
  ];

  // Modules import
  beforeEach(() => {
    filter = test();
  });

  it('should format entries to test' , () => {
    testInputs.forEach((test)=> {
      expect(filter(test.input)).to.be.equal(test.expected);
    });
  });
});

