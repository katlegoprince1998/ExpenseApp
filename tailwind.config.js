/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1e293b',
        'expenses': '#991b1b',
        'income': '#15803d',
        'button': '#64748b',
        'heading': '#e2e8f0'
  
      }

    },
    
  },
  plugins: [

    require('@tailwindcss/forms'),
  ],
}