export const theme = {
  colors: {
    primary: '#2B3589',
    white: '#F6F6F6',
    black: '#0C0C0C',
    text: '#6B6C76',
    stroke: '#F4F4F4',
    error: '#EF4444',
    gray: '#9CA3AF',
  },
  typography: {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
  },
} as const;

export type Theme = typeof theme;
