// See http://brunch.io for documentation.
exports.paths = {
  watched: ['app']
};
exports.files = {
  javascripts: {
    joinTo: {
        'vendor.js': /^(?!app|specs)/,
        'app.js': /^app/
      }
  },
  templates: {
    joinTo: 'app.js'
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['env']},
  eslint: {
    pattern: /^app\/.*\.js?$/,
    warnOnly: true
  },
  vue: {
    extractCSS: true,
    out: 'public/components.css'
  }
};

exports.overrides = {
  test: {
    paths: {
      watched: ['app', 'specs']
    },
    files: {
      javascripts: {
        joinTo: {
          'vendor.js': /^(?!app|specs)/,
          'app.js': /^app/,
          'specs.js': /^specs/
        }
      }
    },
    modules: {
      autoRequire: {
        'specs.js': ['specs/initialize']
      }
    },
    plugins: {
      karma: {
        singleRun: true,
        browsers: ['PhantomJS'],
        frameworks: ['mocha', 'chai'],
        files: [
          'public/vendor.js',
          'public/app.js',
          'public/specs.js'
        ],
        reporters: ['progress']
      }
    }
  }
}
