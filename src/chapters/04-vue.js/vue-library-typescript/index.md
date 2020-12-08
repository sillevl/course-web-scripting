# Vue as library with TypeScript

In this tutorial we will take a look at what is needed to get started with Vue 3 and TypeScript. In this tutorial Vue will be used as a library just to keep it simple to get started. Keep in mind that to create real applications it is better to use the Vue CLI tool to create the boilerplate code for your project. This is just a minimal setup to get you started for some small examples or experiments.

## Setup git

If you want to use git, it is important to get git initialized and have your `.gitignore` correctly configures

```bash
git init
```

create `.gitignore`

```text
node_modules/
dist/
```

## Setup NPM

To get started with any TypeScript or Vue project, it is needed to manage packages and dependencies. Therefore a `package.json` file is needed. Create one with the following command.

```bash
npm init -y
npm install -D typescript vue@next
```

The install script will install typescript and vue as development (`-D`) dependencies.

## Setup TypeScript

In order to get everything up and running with TypeScript it is recommended to have a TypeScript configuration. Create a configuration file with the command below:

```bash
tsc --init
```

We just need to make some small changes to the `tsconfig.json` in order to get everything working smoothly. Enable sourcemapping and set an `outDir` and `rootDir`.

```json
    "sourceMap": true,
    "outDir": "./dist",
    "rootDir": "./src",
```

The `tsconfig.json` configuration should look something like this:

```json
{
    "compilerOptions": {
        "target": "es5",
        "module": "CommonJS",
        "sourceMap": true,
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "forceConsistentCasingInFileNames": true
    },
}
```

If not done yet, it is important to add the `/dist` directory to your `.gitignore` file.

## Webpack

When compiling the project some parts of the code will live in your custom TypeScript files, other code will live in some `node_modules/` dependency. This is hard to impossible for the browser to fetch all different files for every file that depends on another. It would be better to just serve a single file containing all the necessary code, bundled into a compact file. Then the HTML document needs to reference a single JavaScript file, and the browser does not need to spend time trying to figure out all the dependencies and where to fetch and resolve them.

This is exactly what Webpack ([webpack.js.org/](https://webpack.js.org/)) does. It packages all files and dependencies in to managebel bundles of code.

Lets install Webpack with the plugins needed for this project.

```bash
npm install -D webpack webpack-cli ts-loader webpack-dev-server
```

* `webpack`: Contains the main Webpack code
* `webpack-cli`: Tool that enables to use webpack using the CLI
* `ts-loader`: Enables webpack know what TypeScript files are and how to manage and bundle them
* `webpack-dev-server`: A small webserver that will run webpack when files change and update the changes in the browser automatically

It can be handy to define some NPM scripts to help you with some common tasks. Add the following scripts to your `package.json` that will help you build and watch the TypeScript files.

```json
"scripts": {
    ...
    "build": "webpack",
    "watch": "webpack --watch",
    "dev": "webpack serve --port 8080"
},
```

For webpack to know what an how to create the bundle, we need some configuration. This configuration lives inside a `webpack.config.js` file at the root of the project.

```javascript
const path = require('path');

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, './src/app.ts'),
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'vue': 'vue/dist/vue.esm-bundler.js'
        }
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true
    }
};
```

The configuration will tell webpack what the main file of our project is (entry, `./src/app.ts`). It will resolve all dependencies from that file on (`imports`) so that only code is bundled that is actually used. It will configure which files that need to be looked after (`.ts`) and which loader will be responsible for packaging. The output directory is set (`dist`) and the development server is configured to also take a look at the files that live in the `public` directory (our html and other static files).

If you want to learn more about what webpack is, how and why to use it, checkout this video on Youtube:

<YoutubeVideo video-id="5IG4UmULyoA">

## Source files

Now the project is fully setup to get working. The only thing to do now is to add the source files. Because the project is ment to run in the browser, we will need an `index.html` file and some TypeScript files.

### HTML document

The HTML document is a simple document containing a link to the `bundle.js` file. Note that the `defer` attribute will keep it from running straight away. It is important that de document is fully loaded first.

To get a Vue app running, a container element is needed. In this case a `div` element with an id `app` is used. The element contains a declarative rendering statement using the curly braces `{{ hello }}`. Thats all that is needed for this Vue example.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="bundle.js" defer></script>
</head>
<body>
    <div id="app">
        <h1>{{ hello }}</h1>
    </div>
</body>
</html>
```

### TypeScript source code

The Vue application consist of creating and mounting a Vue app instance. The vue app will contain the data method that defines the `hello` variable to be used in the HTML document.

```typescript
import { createApp } from 'vue'

console.log("hello world...")

const app = createApp( {
    data() {
        return  {
            hello: "hello world",
        }
    },
})

app.mount('#app')
```

That's it. This is all that is needed to create the boilerplace project for using Vue as a library with TypeScript.

Test it out using the `npm run dev` command and checkout `http://localhost:8080` in your browser.

The sourcecode of this project can be found at GitHub: [vives-webscripting-2020/vue3-as-library-with-typescript-example](https://github.com/vives-webscripting-2020/vue3-as-library-with-typescript-example)
