---
id: decision-memo-002-information-architecture
title: Decision Memo 002 – Information Architecture and Navigation
sidebar_position: 3
---

# Decision Memo 002 – Information Architecture and Navigation

## Purpose
Define version one pages and navigation so the design system and interactive features have a clear home without changing the club’s familiar marketing structure.

## Primary users
- Parent / Guardian
- Coach

## Two layers of the site
### Marketing / information layer (public)
This preserves trust, story, and familiarity:
- Home
- About
- Team
- Gallery
- Testimonial
- Contact

### Product / utility layer (interactive)
This helps people complete tasks:
- Schedule preview section on Home page (anchor: /#schedule)
- Full schedule page (/schedule)
- Practice attendance register (/practice-register)
- Membership registration (“Get Started” button) points to official registration process (external form for now)

## Navigation strategy (version one)
Top navigation remains marketing-first, with one change:
- Replace "Classes" with "Schedule"
- "Schedule" links to the Home page schedule section (/#schedule)

Hero actions (two calls to action)
1. Primary: Get Started → membership registration (official flow, external for now)
2. Secondary: Register for Practice → attendance register (internal interactive flow)

## Progressive disclosure rule
- The Schedule section on Home shows a preview (next sessions)
- A "View full schedule" link takes users to /schedule

## Constraints
- Solo learning project, not official (yet)
- No payments
- No real child personal information in this practice build
