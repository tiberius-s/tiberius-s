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
  handle: chalk.cyanBright("@tiberius_s"),
  work: chalk.white("Software Developer @ Reachmail Inc."),
  twitter: chalk.blue("https://twitter.com/") + chalk.blue("tiberius_s"),
  npm: chalk.blue("https://npmjs.com/") + chalk.blue("~tiberius-s"),
  github: chalk.blue("https://github.com/") + chalk.blue("tiberius-s"),
  linkedin: chalk.blue("https://linkedin.com/in/") + chalk.blue("tsilivestru"),
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
const workLine = `${data.labelWork}  ${data.work}${newline.repeat(2)}`;
const githubLine = `${data.labelGitHub}  ${data.github}${newline}`;
const npmLine = `${data.labelnpm}  ${data.npm}${newline}`;
const linkedinLine = `${data.labelLinkedIn}  ${data.linkedin}${newline}`;
const twitterLine = `${data.labelTwitter}  ${data.twitter}${newline.repeat(2)}`;
const cardLine = `${data.labelCard}  ${data.npx}`;

const lines = [heading, workLine, githubLine, npmLine, linkedinLine, twitterLine, cardLine];
const output = lines.reduce((x, y) => x + y);

fs.writeFileSync(path.join(__dirname, "bin/output"), chalk.yellow(boxen(output, options)));
