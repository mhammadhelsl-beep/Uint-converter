[architecture.md](https://github.com/user-attachments/files/26877615/architecture.md)
# Project Architecture Diagram

```mermaid
graph TD
    A["User"] --> B["Frontend (HTML/CSS/JS)"]
    B --> C["Flask Backend (app.py)"]
    C --> D["Intelligence Module (intelligence.py)"]
    D --> E["DeepSeek AI"]
    D --> F["SERPAPI"]
    D --> G["Firecrawl"]
    C --> H["Database (database.py)"]
    H --> I["SQLite Database"]
    C --> J["Reports Directory"]
```

This diagram shows the high-level architecture of the IntelliRadar application, including user interaction, frontend, backend, AI integrations, and data storage.
