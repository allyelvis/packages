# Biomedical Lab Test

A Node.js package for analyzing bio-medical laboratory test data. This package can read and analyze data from CSV and JSON files, performing statistical analysis such as mean, median, and standard deviation calculations on the provided data.

## Features

- Supports data analysis from CSV and JSON files.
- Calculates basic statistics: mean, median, and standard deviation.
- Extensible for additional analysis or data formats.

## Installation

You can install the package using npm:

```bash
npm install biomedical-lab-test
```

## Usage

Below is an example of how to use the package to analyze data from a CSV or JSON file.

### Example: Analyzing CSV Data

```javascript
const { analyzeData } = require('biomedical-lab-test');

analyzeData('path/to/your/data.csv')
    .then(results => {
        console.log('Analysis Results:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

### Example: Analyzing JSON Data

```javascript
const { analyzeData } = require('biomedical-lab-test');

analyzeData('path/to/your/data.json')
    .then(results => {
        console.log('Analysis Results:', results);
    })
    .catch(error => {
        console.error('Error:', error);
    });
```

## Function Reference

### `analyzeData(filePath)`

- **Parameters**: 
  - `filePath` (string): The path to the data file. Supported formats are `.csv` and `.json`.
  
- **Returns**: 
  - A promise that resolves with the analysis results, which include the mean, median, and standard deviation for each numeric field in the data.
  
- **Usage**:
  - The function will automatically detect the file type and parse the data accordingly.

### Example Output

If the input data is as follows:

**CSV Example** (`data.csv`):
```csv
age,height,weight
25,175,70
30,180,80
28,178,75
```

**JSON Example** (`data.json`):
```json
[
  { "age": 25, "height": 175, "weight": 70 },
  { "age": 30, "height": 180, "weight": 80 },
  { "age": 28, "height": 178, "weight": 75 }
]
```

The output of `analyzeData` will be:

```json
{
  "age": {
    "mean": 27.666666666666668,
    "median": 28,
    "standardDeviation": 2.0548046676563256
  },
  "height": {
    "mean": 177.66666666666666,
    "median": 178,
    "standardDeviation": 2.0548046676563256
  },
  "weight": {
    "mean": 75,
    "median": 75,
    "standardDeviation": 5
  }
}
```

## License

This package is open-source and available under the [MIT License](LICENSE).

## Contributing

Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## Contact

For questions or suggestions, feel free to contact the author at [naelvis6569@gmail.com](mailto:naelvis6569@gmail.com).
