const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdownit');

const logResults = err => {
  if (err)
    console.log(err);
  else
    console.log('Success!');
}

Metalsmith(__dirname)
  .source('site')
  .destination('build')
  .build(logResults);