const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');

(async () => {
  let parser = new Parser();
  let feed = await parser.parseURL('https://feeds.postfun.org/@baronus/feed.xml?token=noPv0rmB');

  const episodes = feed.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate
  }));

  const folderPath = path.join(__dirname, 'assets');
  const outputPath = path.join(folderPath, 'episodes.json');

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  fs.writeFileSync(outputPath, JSON.stringify(episodes, null, 2));
})();
