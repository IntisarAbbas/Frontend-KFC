# Frontend-KFC

A Next.js frontend application for KFC with Vercel Speed Insights integration.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Vercel Speed Insights** for performance monitoring
- Modern React patterns and best practices

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun

### Installation

Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build

Build the application for production:

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### Lint

Run the linter:

```bash
npm run lint
# or
yarn lint
# or
pnpm lint
# or
bun lint
```

## Vercel Speed Insights

This project includes Vercel Speed Insights to monitor real-world performance metrics.

### How It Works

The `SpeedInsights` component from `@vercel/speed-insights/next` is added to the root layout (`app/layout.tsx`), which automatically tracks:

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)
- Time to First Byte (TTFB)
- Interaction to Next Paint (INP)

### Viewing Metrics

Once deployed to Vercel:

1. Go to your project dashboard on Vercel
2. Navigate to the **Speed Insights** tab
3. View real-time performance data from your users

### Enable Speed Insights on Vercel

1. Log in to your [Vercel dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to the **Speed Insights** tab
4. Click **Enable**

After enabling, new routes will be added at `/_vercel/speed-insights/*` after your next deployment.

## Deployment

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

#### Using Vercel CLI

```bash
npm install -g vercel
vercel deploy
```

#### Using Git Integration

Connect your GitHub repository to Vercel for automatic deployments on every push to main.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Speed Insights](https://vercel.com/docs/speed-insights)
- [Vercel Speed Insights Package](https://vercel.com/docs/speed-insights/package)
- [Speed Insights Metrics](https://vercel.com/docs/speed-insights/metrics)

## License

MIT
