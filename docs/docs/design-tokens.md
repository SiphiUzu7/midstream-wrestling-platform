---
id: design-tokens
title: Design Tokens – Version One
sidebar_position: 5
---

## Definition

Design tokens are named style decisions (colour, typography, spacing, shape) that keep the user interface consistent across pages and components.

## Why tokens matter

- Consistency: reduces “random styling” and makes the product feel coherent.
- Speed: components can be built quickly without redesigning from scratch.
- Accessibility: focus states and contrast become repeatable rules.
- Scalability: future pages inherit the same design language.

## Version One token list

### Colours (semantic)

- brand.primary: #372B51
- brand.accent: #C6A13D 
- brand.secondaryAccent: #C93138
- surface.page: #FFFFFF
- surface.subtle: #F9FAFB
- text.primaryText: #000000
- text.muted: #CFCFCF
- text.inverse: #FFFFFF
- border.primaryBorder: #372B51 
- border.secondaryBorder: #C6A13D 
- focus.ring: #C93138 

### Shape
- radius.brand: 60 pixels

### Typography
- Primary font family: system user interface fonts (temporary)
- body: 16 pixels
- heading 1: 48 pixels
- heading 2: 32 pixels

### Spacing discipline (rules)
- Use the Tailwind spacing scale (2, 3, 4, 6, 8, 12…).
- Do not invent one-off spacing values per section.
- Standard section padding: use consistent values across pages.

## Usage rules (non-negotiable)
- All interactive elements must have visible keyboard focus outlines.
- Text must meet contrast expectations (especially gold on white).
- Buttons must use token colours, not random hexadecimal values.
- New components must use the shared radius token.

## Where tokens live in this project
- Front end token implementation: frontend/tailwind.config.js
- Token verification: Token Playground section on Home page
- Token documentation: this document
