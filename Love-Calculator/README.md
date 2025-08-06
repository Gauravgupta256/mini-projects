# 💖 Love Calculator

## Overview
The Love Calculator is a fun and interactive web application that calculates the "love compatibility" percentage between two people based on their names. It features a beautiful UI with animations, a circular progress indicator, and romantic quotes to enhance the user experience.

## Features
- Input fields for two names to calculate love compatibility.
- Animated circular progress bar showing the love percentage.
- Typewriter effect for displaying results.
- Romantic quotes displayed based on the compatibility score.
- Loading animation while calculating.
- Responsive design for mobile and desktop.
- Caching of previous results to improve performance.
- Local storage to remember the last calculated pair.

## Technology Stack
- **HTML5**: Structure of the web page.
- **CSS3**: Styling, animations, and responsive design.
- **JavaScript (ES6+)**: Logic for calculating love percentage, animations, caching, and local storage.

## Installation and Setup
1. Clone or download the repository.
2. Open the `Love-Calculator` folder.
3. Open `love.html` in any modern web browser (Chrome, Firefox, Edge, Safari).
4. No additional setup or dependencies required.

## Usage
1. Enter your name in the "Your Name" input field.
2. Enter your partner's name in the "Your Partner's Name" input field.
3. Click the "💌 Calculate" button.
4. Wait for the animation and loading message.
5. View your love compatibility percentage and a romantic quote.

## File Structure
```
Love-Calculator/
├── assests/
│   └── romantic.mp3          # Background romantic music (optional)
├── love.html                 # Main HTML file
├── love.css                  # Stylesheet for the app
├── love.js                   # JavaScript logic and animations
└── README.md                 # Project documentation
```

## Code Highlights
- **calculateLove()**: Main function that calculates the love score based on a hash of the combined names.
- **animateCircle()**: Animates the circular progress bar to visually represent the score.
- **typeWriterEffect()**: Displays the result text with a typewriter animation.
- **Caching**: Results are cached in a JavaScript object to avoid recalculations.
- **Local Storage**: Saves the last calculated pair for persistence.

## Customization
- Modify `love.css` to change colors, fonts, and animations.
- Update `love.js` to change the scoring algorithm or quotes.
- Add background music by uncommenting and updating the audio element in `love.html`.

## Browser Support
| Browser        | Supported |
| -------------- | --------- |
| Google Chrome  | ✅        |
| Mozilla Firefox| ✅        |
| Microsoft Edge | ✅        |
| Safari         | ✅        |
| Opera          | ✅        |

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for improvements or bug fixes.

## License
This project is licensed under the MIT License.

## Contact
For questions or support, please contact ME.

---

Enjoy discovering your love compatibility! 💖
