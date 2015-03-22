Hi all,
 
Please implement homework #3.
 
The task consists of two main modules: Angular routing and form fields’ validation.
 
1. Routing. Create routes for the List view of all persons (default view) and Details Edit view for selected person. 
Use ng-view directive / ngRoute module and partial views as separate html files. Default route href: #/list. 
Detail view hrefs: #/person/:id , where id is a unique field in the JSON object (find updated JSON file attached). 
User can see details of the selected person by clicking anchors in the first column OR by navigating URL 
like http://localhost:63342/Training/#/person/76578 (where 76578 is id) directly without additional clicks / actions. 
User returns from detail to default view by clicking Cancel button (without saving any changes) or by successful 
Update when there are no errors in the form (with saving changes).

 

2. Form validation.

2.1. ‘Age’ rules: numbers only, min 1, max 199, required.

2.2. ‘City’ rules: min 3 characters, max 50 characters, required.

2.3.  ‘Phone’ rules: basic USA 10 digits validation, required. Must contain 10 digits, but special characters 
(like – or .) between digits groups still allowed. Can use appropriate RegEx.

2.4. Cancel button: return to the list of persons without saving changes.

2.5. Update button: enabled only if user made some actual changes and updated information is not equal to original 
information. Before first click on Update button there should be NO any VISUAL indication of validation errors. 
After the click, validation messages will be displayed and validation will work on-the-fly as user types in.

2.6.  If no validation errors, changes will be transferred to List view and navigation occurred. If any errors, do not navigate.

2.7. The task does not include any connections to server, so after full page reload all changes will be gone.

 
Please investigate the requirements above and screenshots attached very attentively to achieve the result.
 
Browsers support: IE10+.
Technical requirements: AngularJS only + Bootstrap CSS (optionally).
Timeframes: before 26th of March.
Format: please send me .zip archive with the task implemented via email OR use any online service like GitHub / Bitbucket 
for hosting your code.
IF you sent .zip archives via email, please follow the following format of the .zip file and the folder inside: 
FirstNameLastName_hw2.zip > FirstNameLastName_hw2
 
BONUS task (for advanced students) :
-          You will probably notice that all validation rules and messages, as well as part of the mark-up for Home Number 
and Fax Number are identical and copy-pasted. To avoid this copy-paste, create Reusable component (directive) for Phone
 Number and encapsulate validation and mark-up inside. Remember that inner implementation of the directive should not contain 
 current controller specifics, so directive can be easily shared throughout different modules / applications.