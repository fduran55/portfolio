'use client';
import dynamic from 'next/dynamic';

// Import props type
import type { Props } from './GradientBg';

// Use dynamic import and disable SSR
const BackgroundGradientAnimation = dynamic(
  () => import('./GradientBg').then((mod) => mod.BackgroundGradientAnimationComponent),
  { ssr: false }
);

export default BackgroundGradientAnimation;
