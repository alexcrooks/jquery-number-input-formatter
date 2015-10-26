Package.describe({
  name: 'acrooks:jquery-number-input-formatter',
  version: '1.0.0',
  summary: 'A jQuery library to dynamically display a numeric input\'s formatted value in a label.',
  git: 'https://github.com/alexcrooks/jquery-number-input-formatter.git',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.use('jquery@1.4.0');
  api.addFiles('src/jquery.number-input-formatter.js');
});
