# Kariera Front-End Challenge

A book searching and application website made for the Kariera.gr front-end developer hiring challenge.

The website is fully functional.

## Technical Specifications

The project is built
upon [TypeScript](https://www.typescriptlang.org/), [React](https://react.dev/), [Next.js v14](https://nextjs.org/)
and with the CSS approach of [Tailwind CSS](https://tailwindcss.com/).

E2E Testing is done with [cypress](https://www.cypress.io/).

The project features, among other things:

- The new Next.js app/ router, so it uses:
    - Interception (on login modal)
    - Dynamic routes (book/[id])
    - The api/ routing system.

- Middleware for the token stored in cookies for authentication.

- An api backend, so [axios](https://axios-http.com/) requests are not made directly from the client to the endpoint,
  the endpoint api is therefore concealed from
  the client.

- Tailwind CSS config settings so the site colors change on dark mode.

- Reusable React Components, all commented thoroughly with JSDOC (in addition to TypeScript)
