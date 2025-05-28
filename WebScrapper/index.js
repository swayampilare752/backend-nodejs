/**
 *  Scrape Amazon  Shopping Website 
 * Scrape amazon.in listing screen and extract information product title, price & rating
Algorithm
I
0. Install a browser
1. Open browser
2. Open amazon.in
3. Type shoes in searchbox and click search icon
4. Wait for the page to load
5. When the page loads extract the required data
 */

import puppeteer from 'puppeteer';
import fs from "node:fs";
import xlsx from 'xlsx';
try{
// Step 1 : - // Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://www.amazon.in/',{waitUntil:"domcontentloaded"});
await page.type("#twotabsearchtextbox", "Gaming Laptop rtx 4000 series") // Typed my search query in search box

await page.click("#nav-search-submit-button");// click on search icon

await page.waitForNavigation( {waitUntil: "networkidle2" }); // wait for the page to load with the list of products 
const products = await page.evaluate(() => {
const productCards = document.querySelectorAll(".s-result-item");
const productDetails = [];
productCards.forEach((product) => {
const brand = product.querySelector("h2 span") ? product.querySelector("h2 span").innerText :"NA";
const title = product.querySelector("a>h2>span") ? product.querySelector("a>h2>span").innerText:"NA";
const price = product.querySelector(".a-price-whole") ? product.querySelector(".a-price-whole").innerText:"NA";
const rating = product.querySelector(".a-icon-alt") ? product.querySelector(".a-icon-alt").innerText:"NA";
if(title){

productDetails.push({ brand, title, price, rating });
}
})

return productDetails;
});
console.log(products);

await browser.close();

 // fs.writeFileSync("products.json", JSON.stringify(products))
   const workbook = xlsx.utils.book_new(); // create new excel file object
   const sheet = xlsx.utils.json_to_sheet (products); // excel sheet 

   xlsx.utils.book_append_sheet(workbook, sheet , "Amazon Laptops");
   xlsx.writeFile(workbook, "Laptops.xlsx");
console.log("Products Saved in the Excel File Successfully");
} catch (err) {
console.log(err);
}