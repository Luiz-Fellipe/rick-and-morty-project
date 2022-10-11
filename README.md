# Micro Front-End - Rick and Morty :octocat:

<img src="./images/thumb.webp" width="auto" />

<br>
<div align="center">
 <a href="#project">👉 Project</a>
 <a href="#micro">👉 About Micro Front-End</a>
 <a href="#technologies">👉 Technologies</a>
 <a href="#execution">👉 Execution</a>
 <a href="#author">👉 Author</a>
</div>
<br>
<h2 id="project">Project</h2>
<br>

This project shows all the characters from the rick and morty cartoon and is intended for my studies in GraphQL and Micro Front-end.
<br>
<br>
The Prototype of this project can be found in this [link from figma](https://www.figma.com/file/FPX7V6jGhKiznnKc31LuYh/ricky-and-morty-project?node-id=0%3A1).
<br>

<img src="./images/list.gif" width="auto" />

<img src="./images/details.gif" width="auto" />

<br>

<h2 id="micro">About Micro Front-End</h2>

<br>

In this project i followed the [Micro Front-end model](https://martinfowler.com/articles/micro-frontends.html) , it has been divided into 3 different projects that communicate with each other at runtime: 

<br>
<h3>Shell</h3>
this project is the root of all the others, it is responsible for orchestrating the routing of the application and rendering all the micro front-ends. It is also responsible for housing all global components of the application, such as buttons, inputs and header.

<br>
<h3>Characters list</h3>
this project is responsible for rendering the listing of all the characters in the drawing.
<br>
<br>
<img src="./images/micro-1.webp" width="800" />

<br>
<h3>Character Details</h3>
this project is responsible for rendering all the details of a character in specific.
<br>
<br>
<img src="./images/micro-2.webp" width="800" />

<br>

<h2 id="technologies">Used Technologies</h2>

<br>

This project was developed with the following technologies:

<br>

- <a target="_blank" href="https://nodejs.org/en/">Node 16.13</a>
- <a target="_blank" href="https://reactjs.org/">React 18.0</a>
- <a target="_blank" href="https://graphql.org/">GraphQL 16.6</a>
- <a target="_blank" href="https://github.com/prisma-labs/graphql-request">GraphQL Request</a>
- <a target="_blank" href="https://www.typescriptlang.org/">TypeScript 4.5.4</a>
- <a target="_blank" href="https://webpack.js.org/">Webpack 5</a>
- <a target="_blank" href="https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com">React-Query</a>
- <a target="_blank" href="https://www.radix-ui.com/">Radix-UI</a>
- <a target="_blank" href="https://fontawesome.com/">Font Awesome</a>
- <a target="_blank" href="https://stitches.dev/">Stitches</a>
- <a target="_blank" href="https://eslint.org/">ESLint</a>
- <a target="_blank" href="https://jestjs.io">Jest</a>
- <a target="_blank" href="https://testing-library.com/">Testing Library</a>

<br>

<h2 id="execution">👨🏻‍💻 Execution</h2>
<br>

To run the project:
<br>


- First we have to:
  - Clone the project by running this command in the terminal `git clone <repo_url>`;
      <br>
      <br>

- Open the shell project folder in the terminal and run:
  - `yarn` or `npm install` -> To install all dependencies;
  - `yarn start` or `yarn start:live` -> To run the project;
    <br>    <br>
- Open the CharactersList project folder in the terminal and run:
  - `yarn` or `npm install` -> To install all dependencies;
  - `yarn start` or `yarn start:live` -> To run the project;
    <br>    <br>
- Open the CharactersDetails project folder in the terminal and run:
  - `yarn` or `npm install` -> To install all dependencies;
  - `yarn start` or `yarn start:live` -> To run the project;
    <br>    <br>

  
 :warning: <strong>note: it is necessary to run the 3 projects simultaneously.</strong>

<br><br>


<h2 id="author">👨🏻‍💻 Author</h2>

<br>

<h4>Luiz Fellipe<h4> 

<br>

[![Linkedin: luiz-fellipe-da-silva](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/luiz-fellipe-da-silva-a5936b19a/)
[![GitHub Luiz-Fellipe](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Luiz-Fellipe)


