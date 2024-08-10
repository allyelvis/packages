const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const { mean, median, standardDeviation } = require('simple-statistics');

function analyzeData(filePath) {
    return new Promise((resolve, reject) => {
        const ext = path.extname(filePath);

        if (ext === '.csv') {
            analyzeCSV(filePath)
                .then(results => resolve(results))
                .catch(error => reject(error));
        } else if (ext === '.json') {
            analyzeJSON(filePath)
                .then(results => resolve(results))
                .catch(error => reject(error));
        } else {
            reject(new Error('Unsupported file format'));
        }
    });
}

function analyzeCSV(filePath) {
    return new Promise((resolve, reject) => {
        const data = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                data.push(row);
            })
            .on('end', () => {
                const analysisResults = performAnalysis(data);
                resolve(analysisResults);
            })
            .on('error', (error) => reject(error));
    });
}

function analyzeJSON(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, fileContent) => {
            if (err) {
                reject(err);
                return;
            }
            try {
                const data = JSON.parse(fileContent);
                const analysisResults = performAnalysis(data);
                resolve(analysisResults);
            } catch (error) {
                reject(error);
            }
        });
    });
}

function performAnalysis(data) {
    const numericFields = Object.keys(data[0]).filter(key => !isNaN(data[0][key]));

    const analysis = {};

    numericFields.forEach(field => {
        const values = data.map(item => parseFloat(item[field]));
        analysis[field] = {
            mean: mean(values),
            median: median(values),
            standardDeviation: standardDeviation(values),
        };
    });

    return analysis;
}

module.exports = { analyzeData };
