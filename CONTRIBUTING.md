# Contributing

### One Click Llama Button

`OCLB.user.js` is where all the magic happens. It's the only source file for the userscript, all self-contained, no external dependencies, and written in ES5. You can just make changes in that file and submit a PR.

After the file is updated in the repo (and version number changed too), the userscript will soon be pushed to all devices which have the script installed when Tampermonkey/Greasemonkey/Violentmonkey automatically updates the script.

### Two Click Llama Button

Two Click Llama Button is installed as a bookmarklet, on devices which don't support userscripts, like iOS and Android devices. The bookmarklet just appends a script tag linked to the `TCLB.js` file in the root directory of the repo.

#### Contributing to TCLB

1. Fork and clone this repo.
2. Install the development dependencies by running `yarn` or `npm install`.
3. Make your changes in `TCLB/src/TCLB.js`.
4. Run `yarn lint` or `npm run lint` to check for any recommendations.
5. Run `yarn build` or `npm build` to transpile the ES6 source file into ES5 (saved as `TCLB/bin/TCLB.js`).
6. Push the changes upstream and submit a PR.
