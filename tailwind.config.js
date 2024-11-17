// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // React 파일 경로 지정
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'), // forms 플러그인 추가
    // require('@tailwindcss/container-queries'), // 이 줄을 주석 처리하거나 삭제
  ],
}
