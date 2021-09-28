module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "base": "url(/assets/img/base.jpg)",
        "rn": "url(/assets/img/rn.jpg)",
        "javascript": "url(/assets/img/js.jpg)",
        "git": "url(/assets/img/git.jpeg)",
        "react": "url(/assets/img/react.png)",
        "next": "url(/assets/img/next.jpg)",
        "node": "url(/assets/img/nodejs.png)",
        "mongo": "url(/assets/img/mongodb.jpg)",
        "firebase": "url(/assets/img/firebase.jpg)",
        "bootstrap": "url(/assets/img/bootstrap.png)"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
