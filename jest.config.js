module.exports = {
  verbose: true,
  transform: { '^.+\\.ts$': 'ts-jest' },
  testRegex: 'test\\.ts$',
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['js', 'ts'],
  globals: { 'ts-jest': { tsConfig: 'tsconfig.json' } },
  roots: ['<rootDir>/src'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules'],
}
