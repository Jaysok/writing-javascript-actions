const joke = require('./joke');
const core = require('@actions/core');

async function run() {
  const joke = await joke();
  console.log(joke);
  core.setOutput("joke-output", joke);
}

run();