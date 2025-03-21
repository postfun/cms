const Parser = require('rss-parser');
const fs = require('fs');

(async () => {
  let parser = new Parser();
  // Replace the URL below with your actual podcast RSS feed URL.
  let feed = await parser.parseURL('https://feeds.postfun.org/@baronus/feed.xml?token=noPv0rmB');

  // Map the feed items to an array of episode objects.
  const episodes = feed.items.map(item => ({
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    // Add other fields as needed.
  }));

  // Write the episodes to episodes.json in a pretty-printed JSON format.
  fs.writeFileSync('episodes.json', JSON.stringify(episodes, null, 2));
})();
