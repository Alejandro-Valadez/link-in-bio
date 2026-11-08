# link-in-bio

My link-in-bio page: **[link-in-bio-beta-ten.vercel.app](https://link-in-bio-beta-ten.vercel.app)**

One page with links to my portfolio, LinkedIn, GitHub, Facebook, and resume, set on an animated night sky. Short privacy and terms pages live at `/privacy` and `/terms`.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 with shadcn/ui components and Lucide icons
- Hosted on Vercel, with Vercel Web Analytics

## Run it locally

Needs Node.js 20+ and npm.

```bash
git clone https://github.com/Alejandro-Valadez/link-in-bio.git
cd link-in-bio
npm install
npm run dev       # http://localhost:3000
npm run build
npm run lint
```

## Edit the links

All links are in the `LINKS` array at the top of `src/app/page.tsx`. Each entry takes an `href`, a `label`, an optional `note`, and a Lucide icon. The resume is `public/resume.pdf`.

My full portfolio is at [alejandrovaladez.me](https://alejandrovaladez.me).
