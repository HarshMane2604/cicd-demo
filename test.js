const { add } = require('./index.js');

console.log("Running tests...");

if (add(2, 3) !== 5) {
  console.error("Test failed: 2 + 3 should equal 5");
  process.exit(1); // Exit with error code 1 so the CI pipeline knows it failed
}

console.log("Test passed: 2 + 3 equals 5!");
process.exit(0); // Exit with success code 0
