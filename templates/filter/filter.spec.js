import {{ dashCase name }} from './{{ dashCase name }}'

describe('Filter: {{ dashCase name }}', () => {
  let filter;
  const testInputs = [
    { input: 'test input',  expected: 'TEST INPUT' },
    { input: 'Test Input',  expected: 'TEST INPUT' },
    { input: 'TEST INPUT',  expected: 'TEST INPUT' }
  ];

  // Modules import
  beforeEach(() => {
    filter = {{ dashCase name }}();
  });

  it('should format entries to {{ dashCase name }} [REMOVE]' , () => {
    testInputs.forEach((test)=> {
      expect(filter(test.input)).to.be.equal(test.expected);
    });
  });
});

