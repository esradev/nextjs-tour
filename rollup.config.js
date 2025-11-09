import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import postcss from "rollup-plugin-postcss"
import { dts } from "rollup-plugin-dts"
import { readFileSync } from "fs"
import autoprefixer from "autoprefixer"
import tailwindcssPostcss from "@tailwindcss/postcss"

const packageJson = JSON.parse(readFileSync("./package.json", "utf-8"))

export default [
  // CSS build
  {
    input: "src/styles.css",
    output: {
      file: "dist/styles.css"
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [tailwindcssPostcss(), autoprefixer()]
      })
    ]
  },
  // JavaScript builds
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
        banner: '"use client";'
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
        banner: '"use client";'
      }
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" })
    ],
    external: ["react", "react-dom", "next", "framer-motion", "lottie-react"]
  },
  // TypeScript declarations
  {
    input: "src/index.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: ["react", "react-dom", "next", "framer-motion", "lottie-react"]
  }
]
