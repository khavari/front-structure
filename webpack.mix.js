// source node_modules/laravel-mix/setup/webpack.mix.js

const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/assets/js');
mix.sass('resources/sass/app.scss', 'public/assets/css');
