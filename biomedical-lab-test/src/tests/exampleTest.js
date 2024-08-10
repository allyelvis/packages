const LabTest = require('../index');
const assert = require('assert');

// Example test data
const testResults = {
    'Glucose': 90,
    'Cholesterol': 180,
    'Hemoglobin': 13.5
};

const labTest = new LabTest('Blood Test', 'John Doe', testResults);

// Test generateReport method
assert.strictEqual(
    labTest.generateReport().includes('Lab Test Report for John Doe'),
    true,
    "Report should contain patient's name."
);

// Test calculateAverage method
assert.strictEqual(
    labTest.calculateAverage(),
    (90 + 180 + 13.5) / 3,
    "Average calculation should be correct."
);

console.log('All tests passed!');
