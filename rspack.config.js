const path = require('path');
const {defineConfig} = require('@rspack/cli');

module.exports = defineConfig({
	mode: 'production',
	entry: './index.js',
	output: {
	 path: path.resolve(__dirname, 'dist'),
	 filename: 'bundle.js',
	 library: {
	   name: 'sanitize-html',
	   type: 'umd',
	  },
       },
       module: {
	rules: [
	 {
	  test: /\.js$/,
	  exclude: /node_modules/,
	  use: {
	    loader: 'builtin:swc-loader',
	    options: {
	        jsc: {
		    parser: {
                      syntax: 'ecmascript',
                    },
                  },
                },
              },
            },
          ],
        },
      });
