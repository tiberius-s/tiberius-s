"use strict";

// Pull in our modules
const chalk = require("chalk");
const boxen = require("boxen");
const fs = require("fs");
const path = require("path");

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round"
};

// Text + chalk definitions
const data = {
  name: chalk.white("       Tiberius Silivestru"),
  handle: chalk.magentaBright("@tiberius_s"),
  work: chalk.white("Software Engineer @ Northwestern Mutual"),
  twitter: chalk.cyanBright("https://twitter.com/") + chalk.cyanBright("tiberius_s"),
  npm: chalk.cyanBright("https://npmjs.com/") + chalk.cyanBright("~tiberius-s"),
  github: chalk.cyanBright("https://github.com/") + chalk.cyanBright("tiberius-s"),
  linkedin: chalk.cyanBright("https://linkedin.com/in/") + chalk.cyanBright("tsilivestru"),
  npx: chalk.green("npx") + " " + chalk.white("tiberius-s"),
  labelWork: chalk.white.bold("     Work:"),
  labelTwitter: chalk.white.bold("  Twitter:"),
  labelnpm: chalk.white.bold("      npm:"),
  labelGitHub: chalk.white.bold("   GitHub:"),
  labelLinkedIn: chalk.white.bold(" LinkedIn:"),
  labelCard: chalk.white.bold("     Card:")
};

// Each entry as a line.
const newline = "\n";
const heading = `${data.name} / ${data.handle}${newline.repeat(2)}`;
const workLine = `    ${data.work}${newline.repeat(2)}`;
const githubLine = `${data.labelGitHub}  ${data.github}${newline}`;
const npmLine = `${data.labelnpm}  ${data.npm}${newline}`;
const linkedinLine = `${data.labelLinkedIn}  ${data.linkedin}${newline}`;
const twitterLine = `${data.labelTwitter}  ${data.twitter}${newline.repeat(2)}`;
const cardLine = `${data.labelCard}  ${data.npx}`;

const lines = [heading, workLine, githubLine, npmLine, linkedinLine, twitterLine, cardLine];
const output = lines.reduce((x, y) => x + y);

fs.writeFileSync(path.join(__dirname, "bin/output"), chalk.yellow(boxen(output, options)));
