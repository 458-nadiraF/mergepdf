# PDF Merger Project

A simple Node.js application to merge two PDF files (`A.pdf` and `B.pdf`) into a single output file (`merged.pdf`). This project uses the `pdf-lib` library for efficient PDF manipulation.

## Features
- Generates dummy PDF files for testing purposes.
- Merges two PDFs sequentially into one document.
- Lightweight and fast execution using `pdf-lib`.

## Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- `npm` (Node Package Manager)

## Installation

1. Navigate to the project directory:
   ```bash
   cd quest2
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### 1. Generate Test PDFs (Optional)
If you don't have input files, you can generate sample PDFs (`A.pdf` with 10 pages and `B.pdf` with 3 pages) using the helper script:
```bash
node create_dummy.js
```

### 2. Merge PDFs
Run the main script to merge `A.pdf` and `B.pdf`:
```bash
node index.js
```
The merged file will be saved as `merged.pdf` in the same directory.

## Project Structure
- `index.js`: The main script that performs the PDF merging logic.
- `create_dummy.js`: A utility script to create sample PDF files for testing.
- `package.json`: Contains project metadata and dependencies.
