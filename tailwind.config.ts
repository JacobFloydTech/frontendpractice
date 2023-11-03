import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: { 
        'customShadow': '0px 8px 60px 10px rgba(63,59,59,0.4);'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: { 
        'history-large': '45% 10% 45%;',
        'history-small': '10% 90%',
        'sell': '30% 70%',
        'sellingProccess': '10% 90%',
        'privateSalesGrid':  '35% 21% 21% 21%'
      }
    },
  },
  plugins: [],
}
export default config
