//1st way (Default Import)
//import usersData from "./usersData.js";
//import { myName } from "./usersData.js";

//2nd way (Default Import + Named Export)
//import usersData, { myName, getFirstUser } from "./usersData.js";

//3rd (Import Everything)
import * as something from "./usersData.js";

//4th way (Default Import || Rename Import)
// import uData from "./usersData.js";

//5th way (Named Import)
//import { usersData, myName } from "./usersData.js";

//6th  way (Named Import || Rename Import)
//import { usersData, myName as myNames } from "./usersData.js";

console.log(something.default, something.getFirstUser, something.myName);

/*
🎯 Interview Perfect Summary
Export is used to share code from a module, and import is used to use that code in another file. JavaScript supports named exports (multiple per file) and default exports (only one per file).
*/
