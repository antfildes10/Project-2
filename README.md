# Rock, Paper, Scissors, Lizard, Spock

![Am I Responsive Screenshot](documentation/read-me-media/am-i-responsive.png)

## Introduction

Rock, Paper, Scissors, Lizard, Spock is an extended version of the traditional Rock, Paper, Scissors game, designed to provide more complexity and fun. This web-based game features a responsive design, engaging visuals, and an intuitive user interface.

## Table of Contents

- [Introduction](#introduction)
- [Target Audience](#target-audience)
- [Features](#features)
- [How to Play](#how-to-play)
- [Wireframes](#wireframes)
- [Screenshots](#screenshots)
- [Responsive Design](#responsive-design)
- [Testing](#testing)
- [Validation Testing](#validation-testing)
- [Deployment](#deployment)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [Credits](#credits)
- [License](#license)

## Target Audience

This game is designed for:

- **Casual Gamers**: Anyone looking for a fun and quick game to play in their free time.
- **Fans of Classic Games**: Individuals who enjoy traditional games with a modern twist.
- **Developers and Students**: Those looking to learn and understand JavaScript, CSS, and HTML by examining a practical example.

## Features

- **Interactive Gameplay**: Players can choose between Rock, Paper, Scissors, Lizard, or Spock, and the game will determine the winner.
- **Scoreboard**: Tracks the player's and the computer's scores, as well as win ratios and percentages.
- **Dynamic Score Display**: The score line updates in real time after each round to reflect the current game state.
- **How to Play Section**: Explains the game rules and what each choice beats, helping new players understand the game mechanics.
- **Responsive Design**: Ensures a seamless experience across different devices, including desktops, tablets, and mobile phones.
- **Stylish Interface**: Uses Font Awesome icons and CSS animations for a visually appealing experience.
- **Reset Function**: Allows players to reset scores and start fresh at any time.
- **Game End Modal**: Displays the final match result in a styled modal popup after 10 rounds.

## How to Play

Each player picks one of five options. The winner is determined by these rules:

- **Rock** crushes Scissors and crushes Lizard
- **Paper** covers Rock and disproves Spock
- **Scissors** cuts Paper and decapitates Lizard
- **Lizard** poisons Spock and eats Paper
- **Spock** smashes Scissors and vaporises Rock

Play 10 rounds to determine the overall winner!

## Wireframes

The following wireframes outline the key pages of the game:

- **Home Page**: Includes the title, game options, and score display.
- **Game Page**: Displays the game interface with interactive buttons for player choices.

## Screenshots

- **Home Page**: Showcases the main interface with game options and scores.
![Home Page Screenshot](documentation/read-me-media/main-page.png)
- **Game Page**: Displays the interactive game buttons and real-time score updates.
![Game Page Screenshot](documentation/read-me-media/main-page-results.png)

## Responsive Design

The game is fully responsive and adapts beautifully to different screen sizes, ensuring a seamless experience across desktops, tablets, and mobile devices.

- **Responsive Design Screenshot**: Demonstrates how the game looks on various devices.
![Responsive Design Screenshot](documentation/read-me-media/game-wireframe.png)

### Responsive Design Test

- **Responsive Design Test**: Shows the responsiveness of the site on multiple devices.
![Am I Responsive Screenshot](documentation/read-me-media/am-i-responsive.png)

## Testing

The game has undergone several manual tests to ensure that it works as intended on various devices and browsers. Below are the key areas of testing:

1. **Responsiveness**
   - **Tested on**: Desktop, Laptop, Tablet, and Mobile devices.
   - **Outcome**: The game is fully responsive and displays correctly on all screen sizes.

2. **Cross-Browser Compatibility**
   - **Tested Browsers**:
     - Google Chrome
     - Mozilla Firefox
     - Microsoft Edge
     - Safari
   - **Outcome**: The game works consistently across all browsers.

3. **Game Logic**
   - **Tested Areas**:
     - Player move selection
     - Score updates (both scoreboard and score display line)
     - Win/loss/draw tracking
     - Game end modal after 10 rounds
     - Reset functionality
   - **Outcome**: The game logic works as expected, and all scores update correctly throughout gameplay.

4. **Performance Testing**
   - **Tested using Lighthouse**:
     - **Performance**: 99
     - **Accessibility**: 100
     - **Best Practices**: 100
     - **SEO**: 100
![Lighthouse Scores](documentation/read-me-media/lighthouse-scores.png)

## Validation Testing

All code has been validated using official validation tools to ensure it meets web standards.

### HTML Validation

- **Tool**: [W3C Markup Validation Service](https://validator.w3.org/)
- **Result**: No errors found. The HTML document passes validation with no issues.

### CSS Validation

- **Tool**: [W3C CSS Validation Service (Jigsaw)](https://jigsaw.w3.org/css-validator/)
- **Result**: No errors found. The CSS file passes validation with no issues.

### JavaScript Validation

- **Tool**: [JSHint](https://jshint.com/)
- **Result**: No significant issues found. The JavaScript code passes validation without errors.

## Deployment

This project is deployed using GitHub Pages. The following steps were used to deploy the site:

1. Navigate to the [GitHub repository](https://github.com/antfildes10/Project-2).
2. Click on the **Settings** tab.
3. In the left sidebar, click on **Pages**.
4. Under **Source**, select **Deploy from a branch**.
5. Under **Branch**, select **main** and **/root**, then click **Save**.
6. The site will be deployed automatically. The live link will appear at the top of the GitHub Pages section once the deployment is complete.

The live site can be accessed at: https://antfildes10.github.io/Project-2/

## Local Development

### Cloning the Repository

To clone this repository and run the project locally:

1. Navigate to the [GitHub repository](https://github.com/antfildes10/Project-2).
2. Click the **Code** button and copy the HTTPS URL.
3. Open your terminal and run:
   ```bash
   git clone https://github.com/antfildes10/Project-2.git
   ```
4. Navigate into the project folder:
   ```bash
   cd Project-2
   ```
5. Open `index.html` in your web browser to play the game.

### Forking the Repository

1. Navigate to the [GitHub repository](https://github.com/antfildes10/Project-2).
2. Click the **Fork** button in the top right corner.
3. This creates a copy of the repository in your own GitHub account.

## Project Structure

```
Project-2/
├── index.html                     # Main HTML file
├── README.md                      # Project documentation
├── assets/
│   ├── css/
│   │   └── style.css              # CSS styles
│   └── js/
│       └── script.js              # JavaScript game logic
└── documentation/
    └── read-me-media/
        ├── am-i-responsive.png    # Responsive design screenshot
        ├── game-wireframe.png     # Wireframe screenshot
        ├── lighthouse-scores.png  # Lighthouse test results
        ├── main-page.png          # Main page screenshot
        └── main-page-results.png  # Game results screenshot
```

## Dependencies

- **Font Awesome**: Used for game choice icons.
- **Google Fonts**: Roboto font used for styling.

## Credits

This project was made possible with the help of various resources for learning HTML, CSS, and JavaScript:

- **W3Schools**: Comprehensive tutorials on web development.
- **MDN Web Docs**: Excellent documentation for web standards and best practices.
- **Microsoft Copilot**: Provided guidance on project structure and content.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
