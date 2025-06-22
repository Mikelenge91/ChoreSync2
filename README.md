This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Packages

This project uses the following packages:

- [@clerk/nextjs](https://www.npmjs.com/package/@clerk/nextjs) - Clerk's Next.js SDK for authentication.
- [@uploadthing/react](https://www.npmjs.com/package/@uploadthing/react) - UploadThing's React SDK for file uploads.
- [@mongoose/mongoose](https://www.npmjs.com/package/@mongoose/mongoose) - Mongoose ODM for MongoDB.
- [svix](https://www.npmjs.com/package/svix) - A library for handling webhooks.
- [uploadthing](https://www.npmjs.com/package/uploadthing) - A file upload service.
- [@shadcn/ui](https://www.npmjs.com/package/@shadcn/ui) - A set of UI components for building modern web applications.

## Getting Started

First, install the dependencies:

Make sure you're using Node.js version 24 or later. You can check your Node.js version by running:

`````bash

node -v

 If you need to update Node.js, you can use a version manager like [nvm](

    ````bash
nvm install 24

 then switch to it:

nvm use 24
`````

Afterwards, run the following command to install the dependencies:

````bash

npm install


 Now run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
````

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Sources

Followed this [tutorial](https://www.youtube.com/watch?v=O5cmLDVTgAs) to set up the project.
Modified the code to use the latest versions of the packages and to work with the latest Next.js features.

## Features/Logs

Day 1: set up the project with Next.js, and Clerk. login and signup pages up and running smoothly thanks to clerk.
Day 2: updated the homepage, and added various features.
To-Do: - troubleshoot why certain styles are not applied- reference (https://stackoverflow.com/questions/79577507/tailwind-4-utilities-failing-cannot-apply-unknown-utility-class-in-next-js-1). - look into why there are two profile "buttons" on the homepage.
Day 3:

## Documentation

For the full documentation of the packages used in this project, refer to the following links:

- [Clerk Documentation](https://clerk.com/docs) - for authentication and user management.
- [UploadThing Documentation](https://docs.uploadthing.com/) - for file uploads.
- [Mongoose Documentation](https://mongoosejs.com/docs/) - for MongoDB object modeling.
- [Shadcn UI Documentation](https://ui.shadcn.com/docs) - for UI components.
- [MongoDB Documentation](https://www.mongodb.com/docs/) - for MongoDB database management.
- [Svix Documentation](https://docs.svix.com/) - for handling webhooks.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
