export default function handler(req, res) {
  // Dummy data – later this can scrape InsideNova's Northern Virginia business section.
  const items = [
    {
      title: "InsideNova sample: Northern Virginia business story",
      link: "https://www.insidenova.com/",
      pubDate: new Date().toISOString()
    }
  ];

  res.status(200).json({ items });
}
