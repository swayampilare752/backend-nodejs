
const axios = require("axios");
const cheerio = require("cheerio");
const xlsx = require("xlsx");

const pageUrl = "https://www.timesjobs.com/candidate/job-search.html?searchType=Home_Search&from=submit&asKey=OFF&txtKeywords=&cboPresFuncArea=35";

const getPageData = async () => {
  try {
    const response = await axios.get(pageUrl, {
      headers: {
        "Content-Type": "text/html",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36",
      },
    });

    const $ = cheerio.load(response.data);
    const jobCards = $(".clearfix.job-bx.wht-shd-bx"); // Each job card on Naukri

    const jobsData = [];

    jobCards.each((index, element) => {
      const title = $(element).find("h2.heading-trun").text().trim() || "NA";
      const company = $(element).find("h3.joblist-comp-name").text().trim() || "NA";
      const location = $(element).find("li.srp-zindex.location-tru").text().trim() || "NA";
      const jobtype = $(element).find("span.mt-4").text().trim() || "NA";
      const jobdescription = $(element).find("li.job-description__").text().trim() || "NA";
      const postedDate = $(element).find("span.sim-posted").text().trim() || "NA";

      jobsData.push({
        title,
        company,
        location,
        jobtype,
        jobdescription,
        postedDate,
      });
    });

    // Save to Excel
    const workbook = xlsx.utils.book_new();
    const sheet = xlsx.utils.json_to_sheet(jobsData);
    xlsx.utils.book_append_sheet(workbook, sheet, "IT Jobs");
    xlsx.writeFile(workbook, "jobs.xlsx");

    console.log("✅ Jobs scraped and saved to Excel successfully!");
  } catch (err) {
    console.error("❌ Error scraping data:", err.message);
  }
};

getPageData();
