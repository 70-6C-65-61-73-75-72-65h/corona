import Scraper from "images-scraper";

export const googleImageScrapper = new Scraper({
  puppeteer: {
    headless: false,
  },
});

// export const scrapeMixin = (numberOfFirstMatches) => async (keyword) =>
//   await googleImageScrapper.scrape(keyword, numberOfFirstMatches);

// export const scrapeFirst20 = scrapeMixin(20);
