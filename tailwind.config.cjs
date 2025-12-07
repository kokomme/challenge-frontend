/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // カラートークン
      colors: {
        // ブランドカラー
        primary: {
          DEFAULT: '#4C83F8', 
          hover: '#3B72E7', 
          pressed: '#2A61D6',
        },
        // テキストカラー
        text: {
          regular: '#333333',
          light: '#4D4D4D',
        },
        // ボタンカラー
        button: {
          normal: '#B3B3B3',
        },
        // 背景色
        background: {
          light: '#F5F8FA',
          dark: '#C8E6FA',
        },
      },
      
      // フォントファミリー
      fontFamily: {
        sans: ['"Noto Sans JP"', 'system-ui', 'sans-serif'],
      },
      
      // フォントサイズ
      fontSize: {
        'minimum': '10px',
        'caption': '12px',
        'body': '16px',
        'title': '24px',
      },
      
      // スペーシング
      spacing: {
        'btn-gap': '10px',
      },
      
      // ボタンの高さ
      height: {
        'btn-sm': '24px',
        'btn-md': '32px',
      },
      
      // 最小幅
      minWidth: {
        'btn': '40px',
      },
    },
  },
  plugins: [],
}
