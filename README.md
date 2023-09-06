# Date Library

## Overview

JavaScript class that provides users to work with dates. Has avalible functionsions to manipulate dates in various options.

## Contents

[Installation](#installation)
[Features](#properties)
[Examples](#examples)

## Installation

**Copy & Paste the following**  
To use as a Node.js module copy & paste the following.

```bash
npm install @mxrtydluffy/Date-Library
```

**Create Instance**

```bash
const exampleDate = new D(2023-10-04)
```

## Features

The following features include:

- `year`: Retrieve the full year (e.g., 2023).
- `yr`: Retrieve the short year (e.g., 23).
- `month`: Retrieve the full month name (e.g., January).
- `mon`: Retrieve the abbreviated month name (e.g., Jan).
- `day`: Retrieve the full day name (e.g., Sunday).
- `dy`: Retrieve the abbreviated day name (e.g., Sun).
- `date`: Retrieve the day of the month.
- `hours`: Retrieve the hour of the day.
- `mins`: Retrieve the minutes.
- `seconds`: Retrieve the seconds.

## Examples

```javascript
// New D instance
const miscDate = new D(2023, 07, 06);

// Format Date
console.log(`Random Date: ${randomDate.format("Day, M, Y")}`);
```
