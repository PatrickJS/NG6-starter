describe('Home Route', () => {

	// Before each test
	beforeEach(() => {

		// Navigate to home component
    browser.get('http://localhost:3000');
  });


  // Home component should be visible
  it('should be visible', () => {

		// Expect home component to be visible
  	expect(element(by.tagName('home')).isDisplayed()).toBe(true);
  });

  // Link to About navigates to About Component
  it('should navigate to About if About link clicked', () => {

    // Click navigation to About route
    element(by.css('[ui-sref="about"]'))
      .click()
      .then(() => {

        // Expect About Component to be visible
        expect(element(by.tagName('about')).isDisplayed()).toBe(true);

        // Expect Home component to not be present
        expect(element(by.tagName('home')).isPresent()).toBe(false);
      })
  });

});