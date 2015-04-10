Please implement homework #4.

The task is to implement basic CRUD operation in the application: read information from server, update, add new and delete items.

1.	On view load information about persons should be inquired from the server and rendered on the page. Angular service (factory) should be created for communication with server.
2.	Editing should be implemented using existing UI of the application and modal dialog directive previously created.
3.	Input validation (implemented in the previous homework) should still work for all fields, the same way.
4.	‘Add Person’ modal has 2 new input fields – First Name and Last Name. These fields are required with appropriate validation.
5.	Only correct information (no validation errors) can be submitted.
6.	Clicking on delete button invokes Delete modal dialog.
7.	Display ‘success’ alert message on successful submit of information.
8.	Display ‘error’ alert message on any server error.
9.	Alert messages can be closed by clicking ‘x’ button.

Investigate screenshots attached for details.

All changes are retained after page reload. It means that you’ll need to implement simple server-side for this application.

Options for that:
-	https://github.com/typicode/json-server - full setup of a ‘fake server’ can be done in several minutes.
-	Any other Node.js based implementation. More sophisticated and production-ready approach, for advanced students. If you use this option, provide working instruction how to set up and run your application locally.
-	You can also implement server-side using JAVA, .NET, PHP or any other server-side technology. But in that case please host your app on any (free) web-server in the web (Google App Engine etc.) and send a link to fully-working solution.
