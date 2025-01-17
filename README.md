math blog
---
This is the blog that powers `krispuremath.vercel.app`, built with [next.js](https://nextjs.org/) deployed to the cloud via vercel.

### Pure components

Every stateless pure component is found under `./components`.

Every component that has to do with styling the post's markup
is found under `./components/post/`

These components make up the _style guide_ of the application.

### Blog posts

Every blog post is dynamically pulled from ghost as a headless cms.

You can set pages to renew after 30min in order to have cached static pages
and take advantage of automatic code splitting and lazy loading.

This means that the bloat of a single post doesn't "rub off on" the
rest of the site.

