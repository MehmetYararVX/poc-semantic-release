/**
 * @type {import('semantic-release').GlobalConfig}
 */
module.exports = {
  branches: ["develop"],
  plugins: [
    // https://github.com/semantic-release/commit-analyzer
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "fix", release: "patch" },
          { type: "docs", release: "patch" },
          { type: "style", release: "patch" },
          { type: "refactor", release: "patch" },
          { type: "perf", release: "patch" },
          { type: "test", release: "patch" },
          { type: "build", release: "patch" },
          { type: "ci", release: "patch" },
          { type: "chore", release: "patch" },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],

    // https://github.com/semantic-release/release-notes-generator
    "@semantic-release/release-notes-generator",

    // https://github.com/semantic-release/changelog
    "@semantic-release/changelog",

    // https://github.com/semantic-release/npm
    "@semantic-release/npm",

    // https://github.com/semantic-release/exec
    [
      "@semantic-release/exec",
      {
        prepareCmd: "./release-prepare.sh ${nextRelease.version}",
      },
    ],
  ],
};
