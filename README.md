# One Piece Binder

A React application that showcases the Straw Hat Pirates crew from the popular anime/manga series One Piece. This application fetches character data from the One Piece API and displays it in a visually appealing card layout.

![One Piece Banner](public/images/hero.jpg)

## Features

- Displays information about the Straw Hat Pirates crew members
- Fetches real-time data from the One Piece API
- Responsive grid layout for different screen sizes (mobile, tablet, desktop)
- Character cards with images, names, and roles
- Loading state indicator while fetching data
- Error handling with user-friendly error messages

## Technologies Used

- React 19.1.0 (with Hooks for state management)
- Tailwind CSS 3.4.17 (for responsive design)
- One Piece API (api.api-onepiece.com)
- Async/Await for API calls with error handling

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/one-piece-binder.git
   cd one-piece-binder
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development Mode

To run the application in development mode:

```bash
npm start
```

This will start the development server and open the application in your default browser at [http://localhost:3000](http://localhost:3000).

### Production Build

To create a production build:

```bash
npm run build
```

This will create an optimized build in the `build` folder that can be deployed to a web server.

## API Reference

This project uses the [One Piece API](https://api-onepiece.com/en/documentation) to fetch character data. Specifically, it uses the following endpoint:

```
GET https://api.api-onepiece.com/v2/characters/en/crew/1
```

This endpoint returns information about the Straw Hat Pirates crew (crew ID: 1).

## Project Structure

```
one-piece-binder/
├── public/
│   ├── images/
│   │   ├── hero.jpg
│   │   ├── mugiwara-1.png
│   │   ├── mugiwara-2.png
│   │   └── ...
│   └── index.html
├── src/
│   ├── App.js         # Main application with components and API integration
│   ├── index.css      # Global styles and Tailwind imports
│   └── index.js       # Application entry point
├── package.json       # Project dependencies and scripts
├── tailwind.config.js # Tailwind CSS configuration
└── postcss.config.js  # PostCSS configuration for Tailwind
```

## Components

The application is built with the following React components:

- `App`: Main component that manages state and data fetching
- `Hero`: Displays the hero banner image
- `MugiwaraSection`: Container for the crew members section
- `Grid`: Responsive grid layout for character cards
- `Nakima`: Individual character card component
- `Loader`: Loading indicator while fetching data
- `ErrorMessage`: Displays user-friendly error messages

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Data provided by the [One Piece API](https://api.api-onepiece.com)
- Images and characters are property of Eiichiro Oda and related copyright holders
