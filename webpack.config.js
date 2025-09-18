// webpack.config.js
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: "./src/index.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        clean: true,
        module: true,           // 👈 emit ESM bundles
        library: { type: "module" }
    },
    experiments: {
        outputModule: true,     // 👈 enable ESM output
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".js"],
        extensionAlias: {
            ".js": [".ts", ".js"],   // 👈 maps .js imports to .ts if present
        },
    },
    optimization: {
        splitChunks: {
            chunks: "all",
        },
    },
};
