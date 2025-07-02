<a id="readme-top"></a>

## Corporate Project Manager App

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running">Running</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<a name="about-the-project"></a>

This project is the frontend of a web application, which aims to efficiently manage and review information about various projects within a company. The application allows you to easily list, add, and view projects in detail. During development, I focused primarily on Typescript and React technologies, creating a clean, extensible, and user-friendly interface.

The project provides the following main functionalities:

- **Listing projects:** Projects are displayed in a card view, which contains basic information (name, description) and a dynamically generated image. The data is retrieved asynchronously, simulating backend calls. The listing interface allows you to search and filter between projects.
- **Adding a new project:** An interactive, three-step wizard guides the user through the process of recording a new project. This process includes entering basic information, team members, and related links. A progress bar helps the user track where they are in the data entry. The listing page will automatically refresh after adding a new project.
- **Project Detail View:** It is possible to view the full details of each project on a dedicated detail page.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

<a name="built-with"></a>

- **Programming language:** TypeScript
- **Frontend Library:** React
- **Build tool:** Vite.js
- **UI Framework:** Bootstrap
- **HTTP Client:** Axios
- **Mock API:** JSON Server
- **VCS:** Git
- **Package manager:** Yarn

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

You can install and run the project on your local machine using the steps below.

<a name="getting-started"></a>

## Prerequisites

Make sure the following software is installed on your computer:

<a name="prerequisites"></a>

- Node.js v22.15.0
- Yarn

## Installation

<a name="installation"></a>

1. Clone the repository

```sh
git clone https://github.com/kenezbarbara/project-manager.git
```

2. Install yarn

```sh
npm install --global yarn
```

3. Install the dependencies

```sh
yarn install
```

## Running

<a name="running"></a>

1. Starting JSON Server (Mock API)

```sh
json-server --watch src/database/db.json --port 3000
```

2. In a separate terminal, launch the frontend application in developer mode

```sh
yarn run dev
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

<a name="contact"></a>

Barbara Kenéz - [Linkedin](https://www.linkedin.com/in/barbara-kenéz) - [email](mailto:kenez.barbara96@gmail.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
