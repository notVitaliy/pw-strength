import typescript from 'rollup-plugin-typescript'

export default [
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'amd',
      file: './dist/index.amd.js',
    },
    plugins: [typescript()],
  },
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'cjs',
      file: './dist/index.js',
    },
    plugins: [typescript()],
  },
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'esm',
      file: './dist/index.esm.js',
    },
    plugins: [typescript()],
  },
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'iife',
      name: 'pwStregth',
      file: './dist/index.iife.js',
    },
    plugins: [typescript()],
  },
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'system',
      file: './dist/index.system.js',
    },
    plugins: [typescript()],
  },
  {
    input: './src/pwStrength.ts',
    output: {
      format: 'umd',
      name: 'pwStregth',
      file: './dist/index.umd.js',
    },
    plugins: [typescript()],
  },
]
