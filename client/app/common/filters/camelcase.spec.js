import camelcase from './camelcase'

describe('Filter: camelcase', () => {
  let filter;
  const testInputs = [
    { input: 'TestClass name',  expected: 'testClassName' },
    { input: 'Test className',  expected: 'testClassName' },
    { input: 'test class name', expected: 'testClassName' },
    { input: 'Test Class Name', expected: 'testClassName' }
  ];

  // Modules import
  beforeEach(() => {
    filter = camelcase();
  });

  it('should format entries to camelCase' , () => {
    testInputs.forEach((test)=> {
      expect(filter(test.input)).to.be.equal(test.expected);
    });
  });
});
