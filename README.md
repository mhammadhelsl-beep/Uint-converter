[data_flow.md](https://github.com/user-attachments/files/26877584/data_flow.md)

# Data Flow Diagram

```mermaid
flowchart TD
    Start([User Input]) --> Search[Advanced Search API]
    Search --> AI[DeepSeek AI for Company Search]
    AI --> Companies[List of Companies]
    Companies --> Select[User Selects Company]
    Select --> Analyze[Analyze API]
    Analyze --> Intelligence[Intelligence Module]
    Intelligence --> DeepSeek[DeepSeek AI for Analysis]
    Intelligence --> SERP[SERPAPI for Web Search]
    Intelligence --> Firecrawl[Firecrawl for Scraping]
    DeepSeek --> Result[Analysis Result]
    SERP --> Result
    Firecrawl --> Result
    Result --> Save[Save to Database]
    Save --> Report[Generate Report]
    Report --> Export[Export Options: JSON/TXT]
    Export --> End([End])
```

This diagram illustrates the data flow within the IntelliRadar application, from user input to report generation.
