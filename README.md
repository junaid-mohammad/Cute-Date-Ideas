# Love Roulette 💕

[![Deployed via GitHub Actions](https://img.shields.io/badge/Deployed%20via-GitHub%20Actions-blue?logo=github)](https://github.com/junaid-mohammad/Love-Roulette)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://love-roulette-edc3bxgqhsb4hmfm.canadacentral-01.azurewebsites.net/)
[![Azure DevOps](https://img.shields.io/badge/Tracked%20in-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Love%20Roulette)

This repository contains the source code for **Love Roulette**, a fun web app designed to generate random date ideas across different categories to inspire couples to try new experiences. The project is built using **Node.js**, **Express**, and **EJS templating**, with a focus on creating a clean, user-friendly interface to deliver exciting date suggestions.

---

## 🖥️ Live Website

You can access the live version of the Love Roulette app here:  
👉 **[Love Roulette](https://love-roulette-edc3bxgqhsb4hmfm.canadacentral-01.azurewebsites.net/)**  
👉 **[GitHub Repo](https://github.com/junaid-mohammad/Love-Roulette)**  
👉 **[Azure DevOps](https://dev.azure.com/Junaid-Arif/Love%20Roulette)**

---

## 🎯 Purpose

The purpose of this project was to practice **backend development** using **Node.js** and **Express**, while designing a playful and interactive full-stack web app. By building this project, I aimed to:

- Work with **Node.js** and **Express** for backend routing and request handling.
- Implement **EJS templating** to dynamically render pages with personalized content.
- Practice integrating **HTML/CSS** for a visually appealing front-end design.
- Explore **file structures and deployments** using **GitHub Actions**.

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

The **Love Roulette** app is hosted on **Microsoft Azure App Service** and deployed via **GitHub Actions**, with **Azure DevOps retained for source control tracking** and potential future CI/CD use.

### 🛠 Deployment Setup (What Happened)

Initially, we set up **Azure DevOps** for source control and CI/CD, but encountered persistent deployment issues when connecting Azure Repos to Azure App Service:

- Azure Repos integration failed to recognize the `package.json` and app files properly.
- Continuous Deployment failed due to mismatched expectations between Azure App Service and the file structure pushed from Azure Repos.
- Even successful ZIP deployments didn’t reflect the updated file structure in `/home/site/wwwroot`.

After investigating and attempting various workarounds—including Kudu Debug Console, manual zip deployment, and restarting SCM—we decided to switch to a more reliable solution using **GitHub Actions**.

---

### 🔁 Why We Switched to GitHub Actions

- **More intuitive integration** with Azure App Service.
- GitHub Actions automatically generated a working deployment pipeline (`main_Love-Roulette.yml`).
- Clear logs and separation between **build** and **deploy** steps.
- Worked reliably with no manual restarts or workarounds.

---

### ✅ Final Deployment Flow

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Triggers GitHub Actions → Azure deployment
git push azure main    # Pushes to Azure DevOps (tracking only, not CI/CD)
```

---

### 📌 Current CI/CD Setup

- ✅ Deployed via: **GitHub Actions**
- ✅ Hosted on: **Microsoft Azure App Service**
- 🧭 Tracked on: **Azure DevOps (source control only)**

---

## 🤝 Contribution

If you have ideas for improving the Love Roulette app—such as adding more date ideas, enhancing the UI, or integrating new features—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use, modify, and build upon for their own learning or projects.
