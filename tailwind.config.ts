import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        primaryText: '5F5D5C',
        secondaryText: '80ED99',
        primaryGreenBg: '57CC99',
        primaryBlueBg: '22577A',
        secondaryBlueBg:'27CDC1',
      }
    },
  },
  plugins: [],
}
export default config
