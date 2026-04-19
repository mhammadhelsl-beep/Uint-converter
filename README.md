[README.md](https://github.com/user-attachments/files/26877567/README.md)
# IntelliRadar - AI-Powered Business Intelligence Tool

IntelliRadar is a web application that leverages AI to gather and analyze business intelligence on companies. It uses advanced search capabilities to find companies in specific industries and locations, then performs deep analysis using AI-powered tools.

## Features

- **Advanced Company Search**: Find companies in specific industries and locations using AI
- **Deep Company Analysis**: Generate detailed intelligence reports on target companies
- **Multi-language Support**: Analyze companies in different languages
- **Web-based Interface**: User-friendly web application for easy access
- **Report Management**: Save, view, and export analysis reports
- **Export Options**: Export reports in JSON or TXT formats

## Project Structure

```
Account Radar webApp/
├── backend/
│   ├── app.py              # Flask application server
│   ├── database.py         # Database operations for reports
│   ├── intelligence.py     # AI-powered search and analysis logic
│   └── requirements.txt    # Python dependencies
├── frontend/
│   ├── index.html          # Main web interface
│   ├── script.js           # Frontend JavaScript logic
│   └── style.css           # Styling for the web interface
├── reports/                # Directory for exported reports
└── diagrams/               # Directory for project diagrams
```

## Diagrams

The `diagrams/` directory contains visual representations of the project architecture and data flow:

- `architecture.md`: High-level architecture diagram showing the components and their interactions.
- `data_flow.md`: Data flow diagram illustrating how data moves through the application from user input to report generation.

These diagrams are created using Mermaid syntax and can be viewed in any Markdown viewer that supports Mermaid.

## Prerequisites

- Python 3.8 or higher
- API Keys for:
  - DeepSeek AI (for company search and analysis)
  - SERPAPI (for web search)
  - Firecrawl (for web scraping)

## Installation

1. Clone or download the project to your local machine.


2. Create and activate a virtual environment:
   ```
   python -m venv venv
   # On Windows, if activation fails, run this first in PowerShell:
   # Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process
   # On macOS/Linux: source venv/bin/activate
   ```

3. Install the required Python packages:
   ```
   pip install -r requirements.txt
   ```

4. Create a `.env` file in the backend directory with your API keys:
   ```
   SERPAPI_KEY=your_serpapi_key_here
   FIRECRAWL_API_KEY=your_firecrawl_key_here
   DEEPSEEK_API_KEY=your_deepseek_key_here
   ```

## Running the Application

1. From the backend directory, run the Flask application:
   ```
   python app.py
   ```

2. Open your web browser and navigate to `http://localhost:5000`

3. The application will automatically open in your default browser.

## Usage

1. **Company Search**: Use the "Advanced Search" tab to find companies in specific industries and locations.

2. **Analysis**: Select a company and provide an objective for analysis. The AI will generate a detailed intelligence report.

3. **Reports**: View saved reports in the "Reports" tab. You can export them in JSON or TXT format.

4. **Statistics**: Check the dashboard for statistics on your analyses.

## API Endpoints

- `POST /api/advanced_search`: Search for companies by industry and location
- `POST /api/analyze`: Analyze a specific company
- `GET /api/status/<task_id>`: Check analysis status
- `GET /api/reports`: Get all saved reports
- `GET /api/reports/<report_id>`: Get specific report details
- `GET /api/export/<report_id>/json`: Export report as JSON
- `GET /api/export/<report_id>/txt`: Export report as TXT

## Technologies Used

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML, CSS, JavaScript
- **AI Integration**: DeepSeek AI, SERPAPI, Firecrawl
- **Database**: SQLite (via SQLAlchemy)
- **Styling**: Custom CSS with responsive design

## Potential Issues

- **API Key Errors**: Ensure all required API keys (DeepSeek, SERPAPI, Firecrawl) are correctly set in the `.env` file. Missing or invalid keys will cause search and analysis to fail.  
  **Solution**: Check and update the `.env` file with valid API keys. Refer to the API documentation for key generation.

- **Network Connectivity**: The application requires internet access for AI queries and web scraping. Poor connection may lead to timeouts or incomplete results.  
  **Solution**: Ensure stable internet connection. Retry the operation or check network settings.

- **Rate Limits**: API services may have rate limits. Excessive requests could result in temporary blocks or errors.  
  **Solution**: Wait for the rate limit to reset or reduce the frequency of requests. Consider upgrading API plans if needed.

- **Data Accuracy**: AI-generated results are based on available data and may not always be 100% accurate. Verify information from multiple sources.  
  **Solution**: Cross-verify information with official sources or run additional analyses.

- **Browser Compatibility**: The web interface is optimized for modern browsers. Older browsers may have display issues.  
  **Solution**: Use a modern browser like Chrome, Firefox, or Edge. Update your browser to the latest version.

- **Large Reports**: Generating reports for complex companies may take time and consume significant API resources.  
  **Solution**: Be patient during processing. For large reports, consider breaking down the analysis into smaller parts.



