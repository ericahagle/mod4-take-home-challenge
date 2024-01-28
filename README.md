# 📰 The Haps

# 💻 Tech Stack
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/Cypress-17202C?logo=cypress&logoColor=fff&style=for-the-badge)

# 🧠 Contributors
[Erica Hagle](https://github.com/ericahagle)

# 💭 Abstract
 This app is a news reader that pulls articles from the [News API](https://newsapi.org/). Inspired by the simplicity of [NY Times TimesWire](https://www.nytimes.com/timeswire), this app shows a quick list of today's top stories from multiple sources, and allows the user to dig a little deeper by clicking the article preview and navigating to an article detail page. Since the API returns truncated content for the "full" article, a link out to the original source is also included in each article's details page.

# 📝 Context
This application was built as a take-home challenge project for Turing School of Software and Design's Front End Web Development program, Mod 4 Intermission. We were given the duration of our Intermission week to complete and submit the project for evaluation, using the [provided spec](https://mod4.turing.edu/projects/take_home/take_home_fe).

# 🎬 Preview


# 🔧 Installation Instructions
1. Clone this client repository to your local machine
2. Navigate (`cd`) to your local directory containing the repository
3. Run `npm install` to install the dependencies
4. Run `npm start` to start the server
5. On your web browser, navigate to http://localhost:3000/
6. Get the answer to What's the Haps?

# 🕵️ Testing Instructions
After completing installation of the app...

1. Navigate (`cd`) into your local directory containing the repository
2. Run `npm install cypress` to install Cypress dependencies
3. Run `npx cypress open` to launch Cypress
4. When Cypress opens, click the `E2E Testing` box and choose a browser (if you are currently using the Chrome browser, using Electron is recommended to avoid issues)
5. Click the `Start E2E Testing in <chosen browser>` button
6. Select a test and see the magic!
    - The `error_handling_spec.cy.js` script will test API error handling, as well as the handling of navigating to a non-existent path
    - The `functional_spec.cy.js` script will test all functional elements of the application, across all pages

# 💡 Learning Goals
- React JS and Front-End best practices
- Ability to prioritize for MVP
- Basic usability practices and standards
- Clear hierarchy of information
- Clean, well thought out code

# Challenges & Wins
## 🚧 Challenges
- Utilizing UUIDs for unique keys. This was the first time I've tried using the uuidv4 package, and it took a little investigation to get it working properly.
- Deciding how little/how much to do for an MVP of this nature.
- The NewsAPI didn't include actual IDs for their articles, nor actual full content. So, figuring out how to work around those limitations took some doing.

## 🌟 Wins
- I think I'm actually getting a little better at figuring out CSS! 
- My partner thought my naming the app, 'The Haps' was clever and funny.
- Pulling the filter options directly from the 'sources' API endpoint was cool. I had hardcoded options in a previous project, but wanted to do it right this time.