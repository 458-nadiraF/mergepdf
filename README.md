# PDF Merger Project

A simple Node.js application to merge two PDF files (`A.pdf` and `B.pdf`) into a single output file (`merged.pdf`). This project uses the `pdf-lib` library for efficient PDF manipulation.

## Features
- **Web Interface**: Simple UI to upload and merge PDF files.
- **REST API**: Endpoint `/merge` to programmatically merge PDFs.
- **CLI Support**: Scripts to run merging locally via command line.
- **Fast Processing**: Uses `pdf-lib` for efficient in-memory manipulation.

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

### Web Service (Recommended)
Start the web server:
```bash
npm start
```
Then open [http://localhost:3000](http://localhost:3000) in your browser. Upload two PDF files and click "Merge PDFs" to download the result.

### Command Line Interface
If you prefer using the CLI with local files (`A.pdf` and `B.pdf`):
```bash
npm run cli
```

### Generate Test PDFs
To create sample `A.pdf` (10 pages) and `B.pdf` (3 pages) for testing:
```bash
npm run generate
```

## Deployment
This project is ready to be deployed on platforms like Render, Railway, or Heroku.

1. Push your code to GitHub.
2. Connect your repository to your hosting provider.
3. The build command is `npm install`.
4. The start command is `npm start`.

## Project Structure
- `server.js`: Express.js server handling HTTP requests and file uploads.
- `public/index.html`: Frontend UI for the web service.
- `index.js`: CLI script for local PDF merging.
- `create_dummy.js`: Utility to generate test PDFs.
