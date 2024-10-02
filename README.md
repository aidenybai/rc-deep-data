This is just me trying to reproduce a barebones version of a useContext/useSES pattern that one of our very large customers use. Happy to create GitHub issues when I get the time but wanted to run by y'all first.

### Background

This codebase was originally a very old React webpack SPA but they recently converted to Next.js. This meant there's a lot of sketchy patterns. They originally used MobX but are migrating off to get the benefits of React Compiler. I have been trying to get React Compiler working on the site, but there's a bunch of blockers. So I created this barebones version to show some of the limitations I want to see get fixed.

### Running the app

I made an example fruits filtering app. Let me know if there are any obvious mistakes, quickly threw this together with Cursor. Note that this is an **extremely** simplified version of what's going on in the customer's app, but it captures the essence of the problem. To get it up and running:

```sh
git clone https://github.com/aidenybai/rc-deep-data.git
pnpm i
pnpm run dev # run the app normally w/o anything
pnpm run dev:rc # run the app with React Compiler
pnpm run dev:million # run the app with Million Lint
```

Then make sure you have [React Dev Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) installed

### What's happening

You click a filter option and it will show a different list of fruits. I made 2 modes:

1. **Easy mode**: this shallow clones the store state before setting it. This is similar to what other Redux-like state managers like Zustand do.

2. **Hard mode**: This is what actually happens in the customer's app. Every time you click a filter, it calls a backend API which returns a completely new store state.

You can see the videos under [No React compiler: `/videos/control.mp4`](./videos/control.mp4) and [With React compiler: `/videos/rc.mp4`](./videos/rc.mp4)
