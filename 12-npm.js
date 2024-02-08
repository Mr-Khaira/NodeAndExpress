/* npm calls the reuable code a package.
package - A folder that contains a js code. 

When we install a node packages locally, it is stored in a package file, that is, 
package.json, stores info about the installed packages, we can create it manually, but,
THIS IS WHERE we use npm init command.
npm init -y evarything default. */

/* So, the question arises that, how does the code work if we do not push the node
 modules in our reposotory, the fact is, when the repo is cloned, then if we have 
 package.json, in the repo then a simple command 'npm install', will check all the 
 dependencies form the package.json and install all of them for use.
 */

/* devDependencies - The dependecies that we only need for the porduction time and not 
for the actual application, such as lint, or nodemon or any other dependencies that is 
not necessary for production.
*/

/* We bassically create shorthands for commands in the script part of the package.json 
file.


 The purpose of this script is to provide a default behavior when the user runs the npm 
 test command.

If you want to add custom scripts for your project, you can include them in the "scripts" section.
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "start": "node 1-globals.js"
},
With this configuration, you can run your application using:

command - npm run start */

/* Furthermore, package-lock.json as the name suggests, stores the specific version of 
the packages so that their are no bugs upon version change of the packages.*/
