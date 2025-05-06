# Cute Date Ideas Project

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://portal.azure.com/)

This repository contains the source code for **Cute Date Ideas**, a fun web app designed to generate random date ideas across different categories to inspire couples to try new experiences. The project is built using **Node.js**, **Express**, and **EJS templating**, with a focus on creating a clean, user-friendly interface to deliver exciting date suggestions.

---

## 🖥️ Live Website

You can access the live version of the Secrets app here:  
👉 **[Cute Date Ideas](https://cute-date-ideas-c5c0akdxcpf6a8c0.canadacentral-01.azurewebsites.net/)**

---

## 🎯 Purpose

The purpose of this project was to practice **backend development** using **Node.js** and **Express**, while creating a fun and interactive web app. By building this project, I aimed to:

- Work with **Node.js** and **Express** for backend routing and request handling.
- Implement **EJS templating** to dynamically render pages with personalized content.
- Practice integrating **HTML/CSS** for a visually appealing front-end design.
- Explore **file structures and deployments** on **Microsoft Azure App Service**.

Additionally, this project was a creative way to build something personal and meaningful for my partner, providing ideas for cozy, outdoorsy, foodie, and wildcard dates!

---

## 🛠️ Features

- **Category-Based Suggestions**: Users can choose from four categories—Cozy, Outdoorsy, Foodie, and Wildcard—to get personalized date ideas.
- **Wildcard Option**: A unique feature where the app picks a random category first and then generates a random date idea from that category.
- **User-Friendly Interface**: Designed with a clean and modern look using **CSS** to ensure an engaging user experience.
- **Responsive Design**: The UI works smoothly across devices, from desktops to smartphones.
- **Custom Styling**: Added a warm color palette and playful font to make the app visually appealing.

---

## 💻 Technologies Used

- **Node.js**: Backend runtime environment for building server-side applications.
- **Express**: Framework for building web applications and APIs.
- **EJS (Embedded JavaScript)**: Used for dynamic page rendering.
- **Body-Parser**: Middleware to handle form data submissions.
- **HTML/CSS**: Used to create and style the front-end pages.
- **Microsoft Azure App Service**: Used for deploying and hosting the web app.

---

## 🧩 What I Learned

- Practiced creating **dynamic routes** and **HTTP request handlers** with **Express**.
- Learned to work with **EJS templating** for building interactive and personalized web pages.
- Improved my ability to create **responsive front-end designs** using **HTML/CSS**.
- Explored **Microsoft Azure** for deploying full-stack applications.
- Gained experience in structuring a project with **public assets** for deployment readiness.

---

## 🚀 Deployment & Workflow

The **Cute Date Ideas** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

The **Cute Date Ideas** app is hosted on **Microsoft Azure App Service** with the code managed across **GitHub** and **Azure DevOps**.

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   - Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Cute-Date-Ideas`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   - Created a project called _Cute Date Ideas_ in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   - Used the following to connect local code to Azure DevOps:
     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Cute%20Date%20Ideas/_git/Cute%20Date%20Ideas
     ```

5. **Push to Both Remotes**

   - Pushed the same codebase to both GitHub (`origin`) and Azure DevOps (`azure`):
     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   - Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port Configuration**
   - No custom environment variables required since the app already supports:
     ```javascript
     const port = process.env.PORT || 3000;
     ```

---

### 🔥 Deployment Workflow (Current)

Whenever you update code:

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Pushes to GitHub
git push azure main    # Pushes to Azure DevOps and triggers deployment
```

---

## 🤝 Contribution

If you have ideas for improving the Cute Date Ideas app—such as adding more date ideas, enhancing the UI, or integrating new features—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
