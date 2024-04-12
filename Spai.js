const readline = require('readline');
const say = require('say');
const { exec } = require('child_process');

const { generateImage } = require('./Ai/spaiImgGen');
const { default: axios } = require('axios');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function printMessage(text) {
    console.log(text);
    say.speak(text, 'Microsoft David Desktop', 1);
  }

const websiteData = [
    { keyword: 'google', url: 'https://www.google.com' },
    { keyword: 'youtube', url: 'https://www.youtube.com' },
    { keyword: 'facebook', url: 'https://www.facebook.com' },
    { keyword: 'figma', url: 'https://www.figma.com' },
    { keyword: 'unity', url: 'https://unity.com' },
    { keyword: 'unreal engine', url: 'https://www.unrealengine.com' },
    { keyword: 'instagram', url: 'https://www.instagram.com' },
    { keyword: 'telegram', url: 'https://telegram.org' },
    { keyword: 'tiktok', url: 'https://www.tiktok.com' },
    { keyword: 'github', url: 'https://www.github.com' },
    { keyword: 'coursera', url: 'https://www.coursera.org' },
    { keyword: 'udemy', url: 'https://www.udemy.com' },
    { keyword: 'rosetta stone', url: 'https://www.rosettastone.com' },
    { keyword: 'mayoclinic', url: 'https://www.mayoclinic.org' },
    { keyword: 'webmd', url: 'https://www.webmd.com' },
    { keyword: 'bodybuilding', url: 'https://www.bodybuilding.com' },
    { keyword: 'bon appetit', url: 'https://www.bonappetit.com' },
    { keyword: 'this old house', url: 'https://www.thisoldhouse.com' },
    { keyword: 'fidelity', url: 'https://www.fidelity.com' },
    { keyword: 'allianz', url: 'https://www.allianz.com' },
    { keyword: 'netflix', url: 'https://www.netflix.com' },
    { keyword: 'hulu', url: 'https://www.hulu.com' },
    { keyword: 'spotify', url: 'https://www.spotify.com' },
    { keyword: 'reddit', url: 'https://www.reddit.com' },
    { keyword: 'pinterest', url: 'https://www.pinterest.com' },
    { keyword: 'wikipedia', url: 'https://www.wikipedia.org' },
    { keyword: 'amazon', url: 'https://www.amazon.com' },
    { keyword: 'alibaba', url: 'https://www.alibaba.com' },
    { keyword: 'ebay', url: 'https://www.ebay.com' },
    { keyword: 'twitter', url: 'https://www.twitter.com' },
    { keyword: 'linkedin', url: 'https://www.linkedin.com' },
    { keyword: 'snapchat', url: 'https://www.snapchat.com' },
    { keyword: 'wordpress', url: 'https://www.wordpress.com' },
    { keyword: 'medium', url: 'https://www.medium.com' },
    { keyword: 'twitch', url: 'https://www.twitch.tv' },
    { keyword: 'discord', url: 'https://www.discord.com' },
    { keyword: 'quora', url: 'https://www.quora.com' },
    { keyword: 'etsy', url: 'https://www.etsy.com' },
    { keyword: 'vimeo', url: 'https://www.vimeo.com' },
    { keyword: 'yahoo', url: 'https://www.yahoo.com' },
    { keyword: 'bing', url: 'https://www.bing.com' },
    { keyword: 'apple', url: 'https://www.apple.com' },
    { keyword: 'microsoft', url: 'https://www.microsoft.com' },
    { keyword: 'adobe', url: 'https://www.adobe.com' },
    { keyword: 'zoom', url: 'https://www.zoom.us' },
    { keyword: 'cnn', url: 'https://www.cnn.com' },
    { keyword: 'bbc', url: 'https://www.bbc.com' },
    { keyword: 'fox news', url: 'https://www.foxnews.com' },
    { keyword: 'forbes', url: 'https://www.forbes.com' },
    { keyword: 'cnbc', url: 'https://www.cnbc.com' },
    { keyword: 'abc news', url: 'https://www.abcnews.go.com' },
    { keyword: 'nbc news', url: 'https://www.nbcnews.com' },
    { keyword: 'cbs news', url: 'https://www.cbsnews.com' },
    { keyword: 'usatoday', url: 'https://www.usatoday.com' },
    { keyword: 'wsj', url: 'https://www.wsj.com' },
    { keyword: 'npr', url: 'https://www.npr.org' },
    { keyword: 'bloomberg', url: 'https://www.bloomberg.com' },
    { keyword: 'reuters', url: 'https://www.reuters.com' },
    { keyword: 'axios', url: 'https://www.axios.com' },
    { keyword: 'nypost', url: 'https://www.nypost.com' },
    { keyword: 'huffpost', url: 'https://www.huffpost.com' },
    { keyword: 'guardian', url: 'https://www.theguardian.com' },
    { keyword: 'independent', url: 'https://www.independent.co.uk' },
    { keyword: 'usatoday', url: 'https://www.usatoday.com' },
    { keyword: 'wired', url: 'https://www.wired.com' },
    { keyword: 'time', url: 'https://www.time.com' },
    { keyword: 'fortune', url: 'https://www.fortune.com' },
    { keyword: 'cntraveler', url: 'https://www.cntraveler.com' },
    { keyword: 'natgeo', url: 'https://www.nationalgeographic.com' },
    { keyword: 'espn', url: 'https://www.espn.com' },
    { keyword: 'nba', url: 'https://www.nba.com' },
    { keyword: 'nfl', url: 'https://www.nfl.com' },
    { keyword: 'mlb', url: 'https://www.mlb.com' },
    { keyword: 'nascar', url: 'https://www.nascar.com' },
    { keyword: 'olympics', url: 'https://www.olympics.com' },
    { keyword: 'netflix', url: 'https://www.netflix.com' },
    { keyword: 'hulu', url: 'https://www.hulu.com' },
    { keyword: 'spotify', url: 'https://www.spotify.com' },
];

function openWebsite(url) {
  console.log(`Opening ${url}...`);
  exec(`start ${url}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
}

function wishMe() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    printMessage("Good Morning Boss...");
  } else if (hour >= 12 && hour < 17) {
    printMessage("Good Afternoon Master...");
  }else if (hour >= 0 && hour < 6) {
    printMessage("Ohoh, Great Nini...");
  } else {
    printMessage("Good Evening Sir...");
  }
}

function getFormattedDate() {
  const months = [
    'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
  ];

  const date = new Date();
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  return formattedDate;
}

let isSpeaking = false; // Flag to track if a message is being spoken

function printMessage(text) {
  console.log(text);
  isSpeaking = true;
  say.speak(text, 'Microsoft David Desktop', 1, () => {
    isSpeaking = false;
  });
}

async function getAIResponse(prompt) {
  const apiUrl = 'http://localhost:9999/v1/chat/completions';
  const requestData = {
    model: 'TheBloke/deepseek-coder-6.7B-instruct-GGUF/deepseek-coder-6.7b-instruct.Q4_K_S.gguf',
    stream: true,
    messages: [
      { role: 'system',         "content":"You Are A Private Assistant Ai something like Jarvis and you are called SPAI !! you will Provide comprehensive explanations and step-by-step guides for various technologies, from setting up a home Wi-Fi network to implementing machine learning algorithms and configuring cloud services. For Example if user asked you this : user: How do I set up a home Wi-Fi network? , Assistant: Certainly, sir/madam. To set up a home Wi-Fi network, you will need a wireless router and an internet connection. Start by connecting your router to the modem using an Ethernet cable. Access the routers configuration page through a web browser, typically by entering  in the address bar. Here, you can customize your network name (SSID) and set a strong password for security. Dont forget to enable WPA2/WPA3 encryption for enhanced security. Once configured, your devices can connect wirelessly to the network using the provided credentials." },
      { role: 'user', content: prompt },
    ],
  };

  try {
    const response = await axios.post(apiUrl, requestData);
    const responseData = response.data;
    const choices = responseData.split('{"role":"assistant","content":"').slice(1).map(choice => choice.split('"}')[0].split('\\"'));
    const words = choices.flat(Infinity).filter(Boolean);
    const sentence = words.join(' ');
    console.log('AI Response:', sentence);
    if (!isSpeaking) {
      printMessage(sentence);
    }
  } catch (error) {
    console.error('Error fetching AI response:', error);
  }
}

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
      printMessage("Hello Sir, How May I Help You?");
    } else if (message.includes("open") || message.includes("website")) {
      const words = message.split(' ');
      const openWordIndex = words.findIndex(word => word === 'open');
      if (openWordIndex !== -1 && openWordIndex < words.length - 1) {
        const websiteKeyword = words[openWordIndex + 1];
        const foundWebsite = websiteData.find(site => websiteKeyword.includes(site.keyword));
        const websiteUrl = foundWebsite ? foundWebsite.url : 'https://www.google.com';
        const webTitle = foundWebsite ? foundWebsite.keyword : '';
        printMessage(`Yes Sir, Opening ${webTitle}`);
        openWebsite(websiteUrl);
      } else {
        printMessage("Please specify a website to open.");
        openWebsite(message);
      }
    } else if (message.includes('time')) {
      const time = new Date().toLocaleTimeString();
      printMessage(`The current time is ${time}`);
    } else if (message.includes('date')) {
      const formattedDate = getFormattedDate();
      printMessage(`Today's date is ${formattedDate}`);
    } else if (message.includes("generate") && message.includes("image")) {
      printMessage("Sure, generating the image for you.");
      generateImage(message);
    } else {
      // Send the message to the AI model
      getAIResponse(message.toLowerCase());
    }
  }
  
  function initializeAssistant() {
    wishMe();
    rl.question('Enter your command: ', (answer) => {
      takeCommand(answer.toLowerCase());
      rl.close();
    });
  }
  
  initializeAssistant();