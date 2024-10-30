# Trivia Game Web App

**Visit Trivia Game**  
[https://www.buhrerdesign.com/the-trivia-game](https://www.buhrerdesign.com/the-trivia-game)

**Author:** Hendrich Bührer

## Overview

The **Trivia Game Web App** is a single-page application (SPA) built inside my portfolio website under `pages/the-trivia-game.vue` using Nuxt 3 and Tailwind CSS. Players sign up, answer multiple-choice questions from the Open Trivia Database API, and see how many they can get right in a row before missing one. Scores are tracked, and logged-in users’ best scores are saved on the leaderboard.

## Project Goals

This project checks all the boxes from my original **Project 1: Trivia Game Webapp** proposal:

1. **API Integration:** The Open Trivia Database API handles question fetching in real time, managed by `fetchQuestion`.

2. **User Authentication and Database:** Supabase is set up for user sign-up, login, and leaderboard tracking, all integrated through `handleAuth`.

3. **10-Second Timer:** Each question has a 10-second countdown—no extensions or retries. Timer logic runs in `resetTimer`, keeping the game moving.

4. **Game Over on Wrong Answer:** When players get a question wrong, the game ends and scores save if they’re logged in. This functionality is in `selectAnswer` and `handleGameOver`.

5. **Real-Time Leaderboard:** Scores show up instantly on the leaderboard, with updates handled through `fetchLeaderboard` in Supabase.

6. **Responsive Design:** Tailwind CSS ensures the layout stays clean and responsive on any device.

## Extra Goals

Both extra goals for the project are completed:

- **Trivia Categories:** Players can select trivia categories before starting the game.
- **Difficulty Levels:** Players can also pick a difficulty level, adding more variety to the gameplay.

## Relevance to Previous Work

This builds directly on my **Quick-Snyk** project, where I integrated APIs and managed real-time data securely. Those same principles come into play here, showing that I can handle these integrations end-to-end without a hitch.

## Key Features

- **Automatic Retry on API Errors:** If the API fails, the app retries automatically in the background, keeping gameplay smooth.
- **Game Over Screen Fix:** The game over screen clears when a user signs out and doesn’t show up unless the game is actually over.
- **Special Character Rendering:** Special characters (`&`, `@`, etc.) display correctly, no encoding issues.
- **Category and Difficulty Selection:** Players can select both category and difficulty before starting the game, fulfilling both extra goals.
- **Real-Time Leaderboard:** Scores update immediately on the leaderboard, no delay.

## File Structure

The SPA lives within my portfolio under `pages/the-trivia-game.vue`, and everything runs from that file:

- **pages/the-trivia-game.vue:** Handles the game logic, authentication, start/end functionality, and leaderboard management.

## Challenges Addressed

- **Real-Time Leaderboard:** Ensuring instant updates on the leaderboard required optimizing Supabase queries for smooth display.
- **Timer Logic:** The 10-second countdown runs without any issues, keeping gameplay flowing smoothly.

## Time Estimate

The project wrapped up within the planned 32 hours:

- API integration: 8 hours.
- User authentication and database: 5 hours.
- UI design and implementation: 10 hours.
- Leaderboard: 4 hours.
- Testing and bug fixing: 5 hours.

## Delivery

The project is live on my portfolio at [https://www.buhrerdesign.com/the-trivia-game](https://www.buhrerdesign.com/the-trivia-game). The source code is up on GitHub, and I’ve included this boring write-up.

## Portfolio Integration

The Trivia Game Web App is accessible directly from my portfolio with its own page for gameplay and links to the source code on GitHub.