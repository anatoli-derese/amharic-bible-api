
# Amharic Bible API

Welcome to the Amharic Bible API repository! This project provides a RESTful API for accessing the Amharic Bible, making it easy to retrieve verses, chapters, and books programmatically.

## Features

- **Comprehensive Data**: Includes JSON files for each book of the Bible in Amharic.
- **RESTful Endpoints**: Easily access specific books, chapters, and verses via simple API calls.
- **Flexible Use**: Perfect for integration into web applications, mobile apps, and other digital projects.

## Getting Started

To get started, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/amharic-bible-api.git
    cd amharic-bible-api
    ```
2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Start the Server**:
    ```bash
    npm start
    ```

## API Endpoints

### Retrieve the Full Bible Dictionary
- **Endpoint**: `GET /book`
- **Description**: Retrieves a dictionary of all books in the Bible(bookId - with Book Names).
- **Response**: A list of all books available- with corresponding IDs.

### Retrieve a Specific Book
- **Endpoint**: `GET /book/:id`
- **Description**: Retrieves a specific book by its ID.
- **Parameters**:
  - `id`: The ID of the book.
- **Response**: The contents of the specified book.

### Retrieve a Specific Chapter
- **Endpoint**: `GET /book/:bookId/chapter/:id`
- **Description**: Retrieves a specific chapter from a specified book.
- **Parameters**:
  - `bookId`: The ID of the book.
  - `id`: The ID of the chapter.
- **Response**: The contents of the specified chapter.


### Retrieve a Specific Verse
- **Endpoint**: `GET /book/:bookId/chapter/:chapterId/verse/:id`
- **Description**: Retrieves a specific verse from a specified chapter and book.
- **Parameters**:
  - `bookId`: The ID of the book.
  - `chapterId`: The ID of the chapter.
  - `id`: The ID of the verse.
- **Response**: The contents of the specified verse.

### Retrieve Multiple Verses
- **Endpoint**: `GET /book/:bookId/chapter/:chapterId/verses/:startId-endId`
- **Description**: Retrieves multiple verses from a specified chapter and book.
- **Parameters**:
  - `bookId`: The ID of the book.
  - `chapterId`: The ID of the chapter.
  - `id`: The range of verses to retrieve.
- **Response**: The contents of the specified verses.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. 
Certainly! Here's a section you can add to your `README.md` file about issues:

## Issues

If you encounter any issues or have questions while using the Amharic Bible API, please feel free to open an issue in this repository. I appreciate your feedback and contributions to improve the project.

