module.exports = {
    testEnvironment: "jsdom",
    testPathIgnorePatterns: ['/node_modules/','/.next/'],
    collectCoverage: true,
    collectCoverageFrom:['src/**/*ts(x)'],
    setupFilesAfterEnv: [
      "@testing-library/jest-dom/extend-expect"
    ],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
        "^.+\\.(css|scss)$": "identity-obj-proxy",
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":"<rootDir>/fileMocks.js"
      }
}