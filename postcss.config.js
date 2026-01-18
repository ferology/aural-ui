module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [require('cssnano')] : [])
  ]
};
