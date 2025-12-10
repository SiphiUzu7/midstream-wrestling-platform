---
id: decision-memo-001-midstream-wrestling
title: Decision Memo 001 – Midstream Wrestling
sidebar_position: 1
---

# Decision Memo 001 – Midstream Wrestling Platform


## Context

Midstream Wrestling is a youth focused wrestling club. The current website is mostly static marketing content. Parents can read about the training times, see popups of the latest events or current news, see bout/match dates and other important event dates, as well as register via Google Forms, but the experience is not interactive and there is no proper data layer or administration console. There is no structured back-end system, no online registration, and limited support for accessibility or performance.

This project is a personal learning initiative. It is not yet an official club system, but it is designed as if it could become one in future.


## Problem

Parents and coaches need a simple, reliable digital experience to:

- Discover what the club offers and why wrestling is valuable.
- See correct training times and an up-to-date bouts calendar.
- Register and manage wrestlers online.
- Contact the club quickly when they have questions.

The current site:

- Has no proper data layer or administration tools.
- The current site has a manual pop up system that gets forgotten at times, and this causes outdated info to be given to parents.
- Makes it harder to keep schedules and bouts accurate, and it also makes it difficult for parents to know when a bout is coming up.
- Does not follow modern accessibility or performance practices.
- Does not use a reusable design system, so new pages are inconsistent and slow to build.

## Goal for Version One

Design and build a small “**version one**” product that:

1. Provides a clean, responsive public site based on a design system (tokens and reusable components).
2. Reads training times and bouts from a simple back-end data source instead of hard-coded text.
3. Captures online registrations and stores them safely in a database (even if manual follow-up is still required).
4. Improves performance and accessibility compared with the current live site.

This work will also serve as a learning platform for front-end engineering, back-end fundamentals, and design systems.

## Success Measures (initial)

- Performance score above 90 on Lighthouse for the main page.
- Accessibility score above 90 on Lighthouse for the main page.
- A test user can:
  - Find training times in under 20 seconds.
  - Find the next bout date in under 20 seconds.
  - Submit a registration form without error.
- Clear code structure:
  - `frontend` (React with TypeScript),
  - `backend` (Node.js with Express),
  - `docs` (documentation site for memos and case studies).

## Constraints and Assumptions

- This is a solo project done in personal time.
- No real payment processing in the first version.
- Use only open-source tools.
- All code is stored in a single GitHub repository with a main branch and feature branches.
- Synthetic or sample data is used until the club agrees to supply real data.
