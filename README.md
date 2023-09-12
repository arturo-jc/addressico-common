# addressico-common
Types, utils, and anything else that needs to be shared across projects.

## Installing
In the target project's directory, run `npm i https://github.com/arturo-jc/addressico-common`.

## Developing
1. In this package's directory, run `npm run link` to make it globally accessible.
2. Navigate to the target project's directory and run `npm run link addressico-common`
3. After making changes, run `npm run build` in the current project's directory to see those changes reflected in the target project. (You may need to restart the target application).
4. Once you are done, run `npm run unlink addressico-common` in the target project's directory.
5. If you want to keep any changes you made to the current package, you should commit them before the next step.
6. In the target project's directory, run `npm i https://github.com/arturo-jc/addressico-common` to re-install the package (with any changes you may have committed in the previous step).
