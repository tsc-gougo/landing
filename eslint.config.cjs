const eslintPluginAstro = require('eslint-plugin-astro');
const jsxA11y = require('eslint-plugin-jsx-a11y');

module.exports = [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs['flat/recommended'], // In CommonJS, the `flat/` prefix is required.
   jsxA11y.flatConfigs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      // "astro/no-set-html-directive": "error"
    }
  }
];