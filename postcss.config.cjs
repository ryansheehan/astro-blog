const postcssPresetEnv = require('postcss-preset-env');
const postcssJitProps = require('postcss-jit-props');
// const path = require('node:path');

/** @type {import('postcss-preset-env').pluginOptions} */
const postcssPresetEnvConfig = {
    stage: 3,
};

const postcssJitPropsConfig = {
    files: [        
        `${__dirname}/node_modules/open-props/open-props.min.css`,
    ]
};

console.log(__dirname);

/** @type {import('postcss-load-config').Config} */
module.exports = {
    plugins: [
        postcssJitProps(postcssJitPropsConfig),
        postcssPresetEnv(postcssPresetEnvConfig),
    ],
};
