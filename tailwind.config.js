/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      primary: '#6b705c',
      onPrimary:'#ffffff',
      secondary: "#cb997e",
      onSecondary: '#000000',
      accent: "#ffe8d6",
      onAccent: '#000000',
      primaryTint: "#a5a58d",
      primaryTint2: "#b7b7a4",
      scoundaryTint: "#ddbea9",
    },
    minHeight:{
      '5': '5vh',
      '90':'90vh',
      '20': '20vh'
    },
    gridTemplateColumns:{
      'mobile': '1fr',
      'tablet':'1fr 0.3fr',
      'full': '0.3fr 1fr 0.3fr',

    }, extend: {
      typography: ({ theme }) => ({
        custom: {
          css: {
             '--tw-prose-body': theme('colors.onSecondary'),
            '--tw-prose-headings': theme('colors.onSecondary'),
            '--tw-prose-lead': theme('colors.onSecondary'),
            '--tw-prose-links': theme('colors.onSecondary'),
            '--tw-prose-bold': theme('colors.onSecondary'),
            '--tw-prose-counters': theme('colors.accent'),
            '--tw-prose-bullets': theme('colors.accent'),
            '--tw-prose-hr': theme('colors.accent'),
            '--tw-prose-quotes': theme('colors.onSecondary'),
            '--tw-prose-quote-borders': theme('colors.accent'),
            '--tw-prose-captions': theme('colors.onSecondary'),
            '--tw-prose-code': theme('colors.onSecondary'),
            '--tw-prose-pre-code': theme('colors.accent'),
            '--tw-prose-pre-bg': theme('colors.black'),
            '--tw-prose-th-borders': theme('colors.accent'),
            '--tw-prose-td-borders': theme('colors.accent'),
            '--tw-prose-invert-body': theme('colors.accent'),
            '--tw-prose-invert-headings': theme('colors.onPrimary'),
            '--tw-prose-invert-lead': theme('colors.accent'),
            '--tw-prose-invert-links': theme('colors.onPrimary'),
            '--tw-prose-invert-bold': theme('colors.onPrimary'),
            '--tw-prose-invert-counters': theme('colors.accent'),
            '--tw-prose-invert-bullets': theme('colors.accent'),
            '--tw-prose-invert-hr': theme('colors.onSecondary'),
            '--tw-prose-invert-quotes': theme('colors.accent'),
            '--tw-prose-invert-quote-borders': theme('colors.onSecondary'),
            '--tw-prose-invert-captions': theme('colors.accent'),
            '--tw-prose-invert-code': theme('colors.onPrimary'),
            '--tw-prose-invert-pre-code': theme('colors.accent'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.accent'),
            '--tw-prose-invert-td-borders': theme('colors.onSecondary'),
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
