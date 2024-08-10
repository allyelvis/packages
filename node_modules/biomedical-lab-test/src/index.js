class LabTest {
    constructor(testName, patientName, results) {
        this.testName = testName;
        this.patientName = patientName;
        this.results = results;
        this.date = new Date();
    }

    validateResults() {
        if (!this.results || typeof this.results !== 'object') {
            throw new Error("Results must be an object with key-value pairs.");
        }
        return true;
    }

    generateReport() {
        this.validateResults();

        let report = `Lab Test Report for ${this.patientName}\n`;
        report += `Test Name: ${this.testName}\n`;
        report += `Date: ${this.date.toDateString()}\n\n`;
        report += `Results:\n`;

        for (let [key, value] of Object.entries(this.results)) {
            report += `${key}: ${value}\n`;
        }

        return report;
    }

    calculateAverage() {
        this.validateResults();

        const values = Object.values(this.results);
        const total = values.reduce((acc, val) => acc + val, 0);
        return total / values.length;
    }
}

module.exports = LabTest;
