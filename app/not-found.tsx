import css from './Home.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not-found',
  description: 'Sorry, the page you are looking for does not exist.',
  openGraph: {
    title: 'Not-found',
    description: 'Sorry, the page you are looking for does not exist.',
    url: '08-zustand-hazel-delta.vercel.app',
    images: [
      {
        url: ' https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
        height: 630,
        alt: 'Opss',
      },
    ],
  },
};

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description}>
        Sorry, the page you are looking for does not exist.
      </p>
    </div>
  );
};

export default NotFound;
