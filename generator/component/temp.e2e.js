describe('<%= upCaseName %> Route', () => {

	// Before each test
	beforeEach(() => {

		// Navigate to <%= name %> component
    browser.get('/<%= name %>');
  });

  // <%= upCaseName %> component should be visible
  it('should be visible', () => {

    // Expect <%= upCaseName %> component to be visible
    expect(element(by.tagName('<%= name %>')).isDisplayed()).toBe(true);
  });
});