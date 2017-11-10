1508 Interface boilerplate 3.0
==============================

# How to install

Clone repository into the folder where you want to keep your interface files by running
```
git clone https://github.com/1508/boilerplate-3.0.git .
```
When that is done, you can delete the `.git` folder, to remove any traces of Git in the folder. Now the files are ready to be included in SVN in the solution you are working on.

After this, be sure to run a `npm install` to get all dependencies installed.

# How to build

## Requirements

In order to run the build, you need to have `nodejs` installed in your machine. The boilerplate have been made for NodeJs version 6.x (the LTS version), and have been tested and use on Node 6.11.2.


## Targets

Out of the box, the setup comes with three build targets

```
npm run prototype
npm run dev
npm run build
```

## Prototype build target

This will build sass (SCSS) into CSS and startup a local webserver to serve the index.html page. It is up to you to setup modules, pages etc. The point of this build target is to be able to build the solution locally, without a requirement for any backend.

## Dev build target

This target is meant to be run by a CI server, and is used on our DEV site. The target will bundle all javascript files into one file, and it will bundle all SCSS files into one CSS file. This build does not use the HTML templates for anything, as it is meant to be used against a CMS.

## Build build target

This target is meant for production. It will bundle and minify JS into one file and SCSS into one file. This build does not use the HTML templates for anything, as it is meant to be used against a CMS.

# Whats in the boilerplate?

## Javascript

The boilerplate will give you a basic RequireJS driven setup. The main configuration for this is found in `Interface/resources/js/config.js` and the main file to kickstart everything is `Interface/resources/js/main.js`.

### Foundation 6 modules

The setup also includes all javascript for Foundation 6 modules, but most if not all are disabled by default. If you need to enable any of them, it is done in the file `Interface/resources/js/modules/foundation-loader.js`.

## SCSS

The boilerplate is build with Foundation 6 as a basic CSS framework. By default all modules except the basic grid is disabled. If you need to enable any Foundation modules, you can do that in the bottom of the file `Interface/resources/sass/scaffolding/foundation.scss`.

### Flexbox for grid settings

To turn on flexbox for Foundation grid, set the property `$useFoundationFlexGrid` to true in `styles.scss`

# Umbraco Styling Plugin

If you are to be using Umbraco as a CMS for the solution, you can enable a custom Umbraco module. This module enables you to create styling for custom umbraco modules that is then used in the Unbraco back-office. In short, its a way to style our custom modules.

First you need to make sure that the entry in `package.json` points to your Umbraco web project. You do this by editing `package.json`. Find the line `"build": "projectname",` and update it to be the name of your Umbraco website folder. For instance `"Spl.Sl.Web"`. The plugin in Umbraco will be called `1508 Styling` but the name can be changed by editing the line about `umbracoStylingPlugin` in `package.json`.

## How to use the plugin

The setup is quite simple. First you need to enable building of this module. That is done by in-commenting the umbracoStylingPlugin lines in the file `Interface/grunttasks/aliases.yaml`. There is a line for both the `dev` and the `production` builds.

When this is enabled, grunt will build the Umbraco plugin, and place in the Umbraco folder, and Umbraco will automatically use it when starting up the website.

## How to add styling

The setup is made so that if you create a SCSS file somewhere in the sass folder, and call it something that ends with `_umbraco.scss`, the contents of that file will be included in the Umbraco backend via the 1508 Styling plugin.

So if you are making a custom module for an Image Gallery for the site, you would perhaps have a sass-file for the regular styling called  `_image-gallery.scss`. To make custom styling for this module in the Umbraco backend, create a file called `_image-gallery_umbraco.scss`. Simple!

In order for this to work, the backend module inUmbraco needs to output different markup in the frontend and in the backend. Troels will know how to enable this when building the backend for the modules.
