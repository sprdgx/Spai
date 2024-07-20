# SPAI (Smart Personal AI) Assistant

SPAI is an advanced personal assistant, similar to JARVIS, that can help you with various tasks such as opening websites, telling the time, generating AI responses, and more. SPAI uses speech synthesis to provide a more interactive experience.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Commands](#commands)
- [Example Usage](#example-usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Voice Interaction**: SPAI can speak responses using text-to-speech (TTS).
- **Website Navigation**: Open specified websites directly through commands.
- **AI Responses**: Get comprehensive explanations and step-by-step guides for various technologies and tasks.
- **Time and Date Information**: Ask for the current time and date.
- **Customizable**: Easily extendable to add more features and commands.

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Python (for `say` package)
- Install `Microsoft David Desktop` voice for TTS (Windows)

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/spai-assistant.git
   cd spai-assistant
   ```
2. **Install dependencies:**

   ```sh
   npm install
   ```
3. **Ensure Python and required packages are installed for the say package to function properly.**

4. **Ensure you have the Microsoft David Desktop voice installed on your Windows machine for TTS.**

## Usage

To start the SPAI assistant, run the following command in your terminal:

   ```sh
   node index.js
   ```

SPAI will greet you based on the time of day and prompt you to enter a command.

## Configuration

SPAI can be configured to use different voices and to add more websites to the predefined list.

### Adding More Websites

Edit the websiteData array in index.js to include more websites:

   ```js
   const websiteData = [
  { keyword: 'google', url: 'https://www.google.com' },
  { keyword: 'youtube', url: 'https://www.youtube.com' },
  // Add more websites here
];
   ```

### Changing Voice Settings

To change the voice used for TTS, modify the printMessage function:

   ```js
function printMessage(text) {
  console.log(text);
  say.speak(text, 'Voice Name', 1); // Replace 'Voice Name' with the desired voice
}
   ```

## Commands

### - Greeting :

   Command: **hey** or **hello**.

   Response: SPAI will greet you and ask how it can help you.

### - Opening Websites :

   Command: **open [website name]** or **website [website name]**.

   Response: SPAI will open the specified website if it is in the websiteData list.

### - Time and Date :

   Command: **time**.

   Response: SPAI will tell you the current time.

   Command: **date**.

   Response: SPAI will tell you the current date in a formatted string.

### - AI Response :

   Command: **Any other question or prompt.**

   Response: SPAI will provide a comprehensive AI-generated response to your query.

## Example Usage

```plaintext
User: "hey"
SPAI: "Hello Sir, How May I Help You?"

User: "open google"
SPAI: "Yes Sir, Opening google"

User: "time"
SPAI: "The current time is 3:45 PM"

User: "date"
SPAI: "Today's date is 20 juillet 2024"

User: "How do I set up a home Wi-Fi network?"
SPAI: [Provides detailed AI response]
```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or additions you make.

## License 

This project is licensed under the MIT License.

