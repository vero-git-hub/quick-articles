# Quick Articles

## Overview

Quick Articles is a Single Page Application (SPA) built with Angular, designed to fetch and display articles from the Spaceflight News API. The application features a homepage with article cards, a search functionality to filter articles by keywords, and individual article pages for detailed views.

## Features

- **Homepage**: Displays a list of articles with titles, summaries, and publish dates.
- **Search**: Filters articles by keywords in the title or summary.
- **Article Page**: Shows detailed view of the selected article.

## Technologies Used

- **Angular (v18.0.4)**: Framework for building the SPA.
- **Angular Material**: UI component library for styling and responsive design.
- **RxJS**: Reactive Extensions for asynchronous operations.
- **Spaceflight News API**: Source of article data.
- **npm (v10.8.1)**: Package manager for Node.js.
- **Node.js (v20.14.0)**: JavaScript runtime environment.
- **Sass**: CSS preprocessor for styling.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/vero-git-hub/quick-articles.git
    cd quick-articles
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the application**:
    ```bash
    ng serve
    ```

4. Open your browser and navigate to `http://localhost:4200`.

## Usage

### Home Page

- Displays article cards with a summary truncated to 100 characters.
- Each card has a "Read more" button leading to the article page.

### Search

- Located at the top of the homepage.
- Filters articles based on keywords entered in the search input.
- Highlights matching keywords in the title and summary.
- Priority in search is given to the title.

### Article Page

- Displays the full article with an image, title, and full summary.
- The "Read full article" link opens the full article on the website.
- The "Back to homepage" link returns to the homepage.

## Code Structure

- **app.component.ts**: Main component loading the application.
- **home.component.ts**: Component for the homepage, including search functionality.
- **article.component.ts**: Component for displaying individual articles.
- **article.service.ts**: Service for fetching articles from the API.
- **styles.css**: Global styles including custom theme.

## Known Issues

- Initial loading of articles may have a delay due to API fetch.
- Ensure the API version is up-to-date (currently using v4).

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance!
```
