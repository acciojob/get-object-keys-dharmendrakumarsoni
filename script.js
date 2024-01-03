//your JS code here. If required.
// Define the student object
const student = {
  name: "John Doe"
};

// Add a property to the Object prototype called getKeys()
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Test the getKeys() method
const keysArray = student.getKeys();
console.log(keysArray); // Output: ['name']
