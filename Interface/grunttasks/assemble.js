module.exports = {
  options: {
        flatten: true,
        partials: ['interface/html/_partials/*.html', 'interface/html/_partials/**/*.html'],
        layout: 'interface/html/_layouts/main.html'
      },
      pages: {
        src: ['interface/html/**/*.html', '!interface/html/_partials/**', "!interface/html/_layouts/**"],
        dest: '_prototype/'
      }
 }
