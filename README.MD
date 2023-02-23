# Wet Bat Travel Dashboard

This project is a MPV for Launchcode LATAM.

You can see it in action at http://launchcode-test.vercel.app/

Wet Bat is a national travel agency chain that provides tour services to 50 countries around the world for thousands of families every year.

Wet Bat wants to be globally recognized as a high quality service provider. To be able to invest more on the quality of service without reducing their profit margin, Wet Bat wants to reduce their operational cost in half by creating a lean and efficient operation.

![Screenshot](https://raw.githubusercontent.com/heyBett/launchcode-test/master/public/images/documentation/screenshot.png)

## Environment variables

To run this application, add the following environment variable to an .env file at the root of the project.

`DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgresql`

After filling in the environment variable, clone the project and install the dependencies with the command:

```bash
  git clone https://github.com/heyBett/launchcode-test.git
```

```bash
  cd launchcode-test
```

```bash
  npm i
```

I used Prisma as an ORM in this proposal. After connecting the database, let's create the schema using migrations. To do so, run the command:

```bash
  npx prisma migrate dev
```

And to initialize the Prisma Client:

```bash
  npx prisma generate
```

It is possible to seed the database with the command:

```bash
  npm run seed
```

Now the project is ready to start in development mode with the command:

```bash
  npm run dev
```

If you want to start locally in production, run this commands in sequence:

```bash
  npm run build
```

```bash
  npm run start
```

## Functionalities

- Optimized select from 3800+ airports
- Quick creation of Quotes
- Full Quotes viewing and editing
- Transformation of Quotes into Services
- Cache Revalidation and Mutations with SWR
- 100% typed with Typescript
- Completely Responsive App

## The airports challenge

![Airports Dropdown](https://raw.githubusercontent.com/heyBett/launchcode-test/master/public/images/documentation/airports.png)

Searching through a gigantic array and within two properties of each object may seem unperformative, and indeed it is.
![Screenshot](https://raw.githubusercontent.com/heyBett/launchcode-test/master/public/images/documentation/lines.png)

I decided to use a component that renders the options according to the typed information, and on the first run the results took seconds to appear.

The solution came with two steps.

The first was be to asynchronously filter the Array into a function before it gets to the component.

The second was, in order not to return a large number in the first key down, we only started rendering the list after 3 characters typed. In this way we optimize the size of the result Array, and the length is small enough to type the airport code (the search looks in the "name" and "code" properties, ex: "Governador André Franco Montoro" and "GRU")

## Creating and Manipulating Quotes

Using mutations the data manipulation experience is seamlessly.

If one user changes something on their computer, it only takes a few seconds for it to be updated on a second person's computer, without needing to refresh the page.

In quote creation, the experience also has no trouble. A mutate at the end of the POST function ensures that the user is always seeing the most up-to-date information.

The same happens when editing or transforming a Quote into a Service, or vice versa.

## What about the backend?

Since we touch on that point, let's talk about the technologies used in this project.

The Frontend was built on NextJS, the React Framework for the Web. Next has powerful tools for routing, SEO, preloaded links and image optimization, all used in this project.

This Framework also has API Routes, which are basically internal routes that run NodeJS in a serveless way, without the need for a server.

I used https://tailwindcss.com/ for styling and https://heroicons.com/ for the icons. I've made a custom tailwind.config with Wet Bat color classes.

## Infrastructure

The frontend and API routes are on Vercel. For the database I'm using an instance of PostgreSQL and testing https://neon.tech. (Let me know if you have any downtime)

## That's it

Let me know if you need anything else!
