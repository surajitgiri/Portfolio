'use client';

import React, { useState } from 'react';
import { getSkillIconUrl } from '@/utils/getSkillIconUrl';

// Skills with black/dark monochrome logos that need contrast inversion in dark mode
const darkMonochromeSkills = new Set([
  'next.js',
  'nextjs',
  'next.js 16',
  'express',
  'express.js',
  'vercel',
  'github',
  'shadcn ui',
  'shadcn',
  'prisma',
]);

export default function TechBadge({ name, color = '', className = '' }) {
  const [imgError, setImgError] = useState(false);
  const iconUrl = getSkillIconUrl(name);
  const isMonochrome = darkMonochromeSkills.has(name?.toLowerCase()?.trim());

  const badgeStyle = color || 'bg-slate-100/80 dark:bg-[#1F2937] text-gray-800 dark:text-[#F9FAFB] border border-gray-200/80 dark:border-[#374151]';

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm sm:text-base font-semibold ${badgeStyle} hover:scale-105 transition-all cursor-default shadow-xs ${className}`}
    >
      {!imgError && iconUrl ? (
        <img
          src={iconUrl}
          alt={name}
          className={`w-4.5 h-4.5 object-contain shrink-0 ${
            isMonochrome ? 'dark:invert dark:brightness-200' : ''
          }`}
          onError={() => setImgError(true)}
        />
      ) : null}
      <span className="leading-none">{name}</span>
    </span>
  );
}
