This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

---
### Project stack
This project is using TypeScript and Sass, TailwindCss.  

## Project structure
### Images and assets
Images are inside `images` directory inside of `public` directory.
> Next.js provides `Image` component, which automatically handle image lazy loading and responsive image for different screens. 

### Styles
- CSS modules: CSS modules locally scope CSS by automatically creating uniq class name. This allows us to use the same CSS class name in different files. CSS modules are located inside *** directory and can be imported anywhere.
- Global stylesheet: Base CSS loaded by every page. It(`globals.scss`) located inside styles directory.





---
### Packages
##### Packages for styling
- tailwind + postcss
- Sass
##### Packages for code styling
- classnames
`classnames` is a simple library that lets you toggle class names easily.