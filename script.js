//your JS code here. If required.
function allMethods() {
  //write your code here
const methods =Object.getOwnPropertyNames(Math).filter(prop=> typeof Math[prop]==='function');
	return methods.join(',');
}

alert(allMethods());
