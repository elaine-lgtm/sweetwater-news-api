export default function handler(req, res) {
  // Dummy data – later this can scrape DataCenterDynamics' Northern Virginia tag page.
  const items = [
    {
      title: "DCD sample: Northern Virginia data center real estate",
      link: "https://www.datacenterdynamics.com/en/news/?tag=northern-virginia",
      pubDate: new Date().toISOString()
    }
  ];

  res.status(200).json({ items });
}
