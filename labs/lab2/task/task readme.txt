Please implement homework #2:
 
-Create custom directive for Modal (Popup) Window with the following API:

<custom-modal header=”some custom string or HTML header” 
			  show=”any expression to evaluate dynamic show / hide of the window based on Boolean flag” 
			  ok-text=”any string to show on default submit button” 
			  cancel-text=”any string to show on cancel button” 
			  oncancel=”bind any outer scope function here” 
			  onsubmit=”bind any outer scope function here”>any string or HTML content</custom-modal>
 
This custom modal will show details of the current data grid row from Homework 1 and will be invoked by 
clicking on buttons in cells of the last column.
Popup window basic functionality: 
1) API above implemented. 
2) Closing by clicking on ‘x’ button at the top-right corner OR dynamically anytime when 
	show=”” attribute returns ‘false’. 
3) Clicking on Submit button will also close the window and the message at the main view 
	will be updated. See screenshots attached for details.
 
Browsers support: IE10+.
Technical requirements: AngularJS only + Bootstrap CSS (optionally). No other frameworks allowed.
Timeframes: during 1 week (before 5th of March).
Format: please send me .zip archive with the task implemented via email OR use any online service like GitHub for hosting your code.
!! IF you still sent .zip archives via email, please follow the following format of the .zip file and the folder inside: 
FirstNameLastName_hw2.zip > FirstNameLastName_hw2
 
Helpful links:
https://docs.angularjs.org/guide/directive
http://www.ng-newsletter.com/posts/directives.html
http://mgcrea.github.io/angular-strap/
https://angular-ui.github.io/
 
++ presentation attached.
 
BONUS task (for advanced students J ) :
-Build the same grid UI (with all interaction / functionality from the 1st and 2nd homeworks in place) 
using already existing http://ui-grid.info/ component. It will give a good experience in using the most 
extensive AngularJS datagrid component available.