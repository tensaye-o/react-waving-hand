export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  transform: {
    '\\.tsx?$': 'ts-jest',
    '^.+\\.css$': 'jest-transform-css'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchman: true
}
