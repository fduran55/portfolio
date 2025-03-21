'use client';
import dynamic from 'next/dynamic';
import type { Props } from './GradientBg';

const BackgroundGradientAnimation = dynamic<Props>(
  () => import('./GradientBg').then((mod) => mod.BackgroundGradientAnimationComponent),
  { ssr: false }
);

export default BackgroundGradientAnimation;
