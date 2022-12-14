# Testing
## Validator Testing
The Rock, Paper, Scissor, Lizard, Spock game website has be throughly tested. All the code has been run through the: 
* [W3C html Validator](https://validator.w3.org/)
* [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* [Jshint Validator](https://jshint.com/)

The HTML validator results for URL link for HTML, CSS & JavaScript are below below:

* No errors were returned when passing through the official [W3C validator](https://validator.w3.org/)
   
* ![Website HTML URL link](assets/images/readme-images/html-url-validator.PNG)
* ![Website HTML direct input link](assets/images/readme-images/html-direct-input-validator.PNG)

* No erros were returned when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/#validate_by_uri)
   
* ![Website CSS URL link](assets/images/readme-images/css-url-validator.PNG)
* ![Website CSS durect input link](assets/images/readme-images/css-direcet-input-validator.PNG)

* No erros were returned when passing through the official [Jshint validator](https://jshint.com/)
   * There are 10 functions in this file.

   * Function with the largest signature take 2 arguments, while the median is 0.

   * Largest function has 59 statements in it, while the median is 5.5.

   * The most complex function has a cyclomatic complexity value of 17 while the median is 1.
   * ![Website JavaScript Direct Input](assets/images/readme-images/jshint-direct-input-validator.PNG)

During the developmet process minor errors were found and resolved in the HTML file as well as the JavaScript file such as:
* HTML error
![HTML validator error](assets/images/readme-images/html-validator-error.PNG)
* Jshint error
![Jshint validator error](assets/images/readme-images/jshint-error.PNG)
* Minor bugs were found in the google chrome console which were resolved.

## Responsiveness Test

* The responsive design tests were carried out manually with [Google Chrome DevTools](https://developer.chrome.com/docs/devtools/)

## Browser Compatibility

Rock, paper, Scissor, Lizard, Spock game website was tested on the following browsers with no visible issues for the user. 
Google Chrome, Microsoft Edge. Appearance, functionality and responsiveness were consistent throughout for a range of device sizes and browsers.

## Known Bugs
* ### Unresolved
   * During the final touches I noticed the favicon icon is not loading through the deployed site while the favicon icon is loaded through GitPod.
   ![Favicon Error](assets/images/readme-images/favicon-error.PNG)
   ## Additional Testing

### Lighthouse
The site was also tested using [Google Lighthouse]() in Chrome Developer Tools to test the page for:
* Performance - How the page performs whilst loading.
* Accessibility - Is the site acccessible for all users and how can it be improved.
* Best Practices - Site conforms to industry best practices.
* SEO - Search engine optimisation. Is the site optimised for search engine result rankings.

As an example the results for Mecca Travel home page are below:

![Lighthouse test results](assets/images/readme-images/lighthouse-test.PNG)