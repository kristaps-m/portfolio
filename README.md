This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

FIRST ? 24. novembris / coding-sessions
https://www.youtube.com/watch?v=wdoCcJCciJw

LAST ?8. decembris / coding-sessions
https://www.youtube.com/watch?v=ZzRfURvxN7o

https://drive.google.com/drive/folders/1ti72qs9rseSpftN67_OGmRTTD0xmtwOe
https://stackoverflow.com/questions/18262288/finding-total-contributions-of-a-user-from-github-api
https://docs.github.com/en/graphql/overview/explorer
https://www.npmjs.com/package/react-activity-calendar
https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props

```
next.config.js priekš avatarUrl ielasīšanas
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
      },
    ],
  },
};
```

### Installations

npm install moment
npm install react-github-graph
npm i styled-components
npm install --save-dev @types/styled-components
npm install react-router-dom@5.3.0 @types/react-router-dom@5.3.2

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
