# Personal Site

The code part of my own website.

## Project setup

I am using VueCLI to start up the project.

### VueCLI installation

```bash
# use npm to install vue cli
npm install -g @vue/cli

# check version, currently should be 4.5.4
vue --version
```

### Project initialization

```bash
vue create my-project
```

Remember to install with `vuex` and `vue-router`

### Install packages

Install all the necessary packages and add vue config

```bash
npm install --save vue-meta vue-resource @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons vue-svg-loader vue-template-compiler
```

```javascript
// for loading svg
module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
```

### Compiles and hot-reloads for development

```bash
npm run serve
```

### Compiles and minifies for production

```bash
npm run build
```
