describe('About Route', () => {

	// Before each test
	beforeEach(() => {

		// Navigate to about component
    browser.get('/about');
  });

	// About component should be visible
  it('should be visible', () => {

    // Expect home component to be visible
    expect(element(by.tagName('about')).isDisplayed()).toBe(true);
  });

  // Link to Home navigates to Home Component
  it('should navigate to Home if Home link clicked', () => {

    // Click navigation to Home route
    element(by.css('[ui-sref="home"]'))
      .click()
      .then(() => {

        // Expect Home Component to be visible
        expect(element(by.tagName('home')).isDisplayed()).toBe(true);

        // Expect About component to be not be present
        expect(element(by.tagName('about')).isPresent()).toBe(false);
      })
  });

});