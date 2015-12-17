const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdownit');
const mdAttrs = require('markdown-it-attrs');
const hljs = require('highlight.js');

Metalsmith(__dirname)
  .source('site')
  .use(markdown({ highlight })
    .use(mdAttrs))
  .destination('build')
  .build(logResults);

function logResults(err) {
  if (err)
    console.log(err);
  else
    console.log('Success!');
}

function highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    try {
      return hljs.highlightAuto(str).value;
    } catch (__) {}

    return ''; // use external default escaping
}
