# Personal Site Management Panel

## Overview

This is the management interface for my personal website. It provides a secure way to control and update the content displayed on my personal site, including the introduction, experience, and project listings — making it more flexible and easier to maintain.

## Features

- **Authentication**:
    - Welcome page and secure login system using **JWT (JSON Web Tokens)**.
    - Middleware route protection: pages are inaccessible without a valid login.
    - Prevents logged-in users from accessing the login page again.
    - After successful login, users are redirected to the dashboard.

- **Dashboard**:
    - Provides navigation to:
        - Manage Introduction content
        - Manage Experience entries
        - Manage Project listings
        - Log out

- **Content Management**:
    - Add, edit, and delete content in each section.
    - Updates are immediately reflected on the linked [personal site](https://your-personal-site.com).

> This management panel is intended for **personal use only** and is not publicly deployed.

## Screenshots
![Homepage](/screenshots/homepage.png)
![LoginPage](/screenshots/login.png)
![Signup](/screenshots/signup.png)
![Dashboard](/screenshots/dashboard.png)
![Detail](/screenshots/detail.png)
![Edit](/screenshots/edit.png)
## Tech Stack

- **Frontend Framework**: [Next.js](https://nextjs.org/)
- **Authentication**: **JWT** with middleware protection
- **Database**: [MongoDB](https://www.mongodb.com/)

## Setup Instructions

To run the project locally:

```bash
git clone https://github.com/your-username/personal-site-management.git
cd personal-site-management
npm install
npm run dev