export default function handler(req, res) {
  // Dummy data for now – replace later with real scraping logic.
  const items = [
    {
      title: "ALTA sample headline: Title industry news example",
      link: "https://www.alta.org/news-and-publications/",
      pubDate: new Date().toISOString()
    }
  ];

  res.status(200).json({ items });
}
