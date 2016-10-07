1508 Interface boilerplate 3.0
==============================

# How to install

Clone repository into the folder where you want to keep your interface files by running `git clone https://github.com/1508/boilerplate-3.0.git .`. When that is done, you can delete the `.git` folder, to remove any traces of Git in the folder. Now the files are ready to be included in SVN in the solution you are working on.

After this, be sure to run a `npm install` to get all dependencies installed.

# How to build

Out of the box, the setup comes with three build targets

```
npm run prototype
npm run dev
npm run build
```

## Prototype build target

This will build sass into css and startup a local webserver to serve the index.html page. It is up to you to setup modules, pages etc. The point of this build target is to be able to build the solution locally, without a requirement for any backend.

## Dev build target

This target is meant to be run by the Teamcity CI server, and is used on our DEV site. The target will bundle all javascript files into one file, and it will bundle all SCSS files into one CSS file. This build does not use the HTML templates for anything, as it is meant to be used against the CMS.

## Build build target

This target is meant for production. It will bundle and minify JS into one file and SCSS into one file. This build does not use the HTML templates for anything, as it is meant to be used against the CMS.

# Whats in the boilerplate?

## Javascript

The boilerplate will give you a basic RequireJS driven setup. The main configuration for this is found in `Interface/resources/js/config.js` and the main file to kickstart everything is `Interface/resources/js/main.js`. 

### Foundation 6 modules

The setup also includes all javascript for Foundation 6 modules, but most if not all are disabled by default. If you need to enable any of them, it is done in the file `Interface/resources/js/modules/foundation-loader.js`.

## SCSS

The boilerplate is build with Foundation 6 as a basic CSS framework. By default all modules except the basic grid is disabled. If you need to enable any Foundation modules, you can do that in the bottom of the file `Interface/resources/sass/scaffolding/foundation.scss`.
