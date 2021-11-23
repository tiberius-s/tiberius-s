import { writeFileSync } from "fs";
import { URL } from "url";
import boxen from "boxen";
import chalk from "chalk";

const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

const data = {
  name: chalk.magenta("              Tiberius Silivestru"),
  work: chalk.white("Software Engineer @ Northwestern Mutual"),
  npm: chalk.cyan("https://npmjs.com/") + chalk.cyan("~tiberius-s"),
  github: chalk.cyan("https://github.com/") + chalk.cyan("tiberius-s"),
  linkedin: chalk.cyan("https://linkedin.com/in/") + chalk.cyan("tsilivestru"),
  npx: chalk.green("npx") + " " + chalk.white("tiberius-s"),
  labelWork: chalk.blue.italic("     Work:"),
  labelnpm: chalk.blue.italic("      npm:"),
  labelGitHub: chalk.blue.italic("   GitHub:"),
  labelLinkedIn: chalk.blue.italic(" LinkedIn:")
};

// Each entry as a line.
const newline = "\n";
const heading = `${data.name}${newline.repeat(2)}`;
const workLine = `    ${data.work}${newline.repeat(2)}`;
const githubLine = `${data.labelGitHub}  ${data.github}${newline}`;
const npmLine = `${data.labelnpm}  ${data.npm}${newline}`;
const linkedInLine = `${data.labelLinkedIn}  ${data.linkedin}${newline.repeat(2)}`;
const cardLine = `               ${data.npx}`;

const lines = [heading, workLine, githubLine, npmLine, linkedInLine, cardLine];
const output = lines.reduce((x, y) => x + y);

writeFileSync(new URL("bin/output", import.meta.url), chalk.yellow(boxen(output, options)));
