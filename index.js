const puppeteer = require('puppeteer');

const fs = require('fs');

(async () => {
  const lunchBrowser = await puppeteer.launch({headless:false});

  const newPage = await lunchBrowser.newPage();

  await newPage.goto(/* website name */ {timeout: 0})

  const getNumbers = await newPage.evaluate( () => {
    const pgClass = document.querySelectorAll( /* enter elementName */ );

    return pgClass.innerText;
  })

  await fs.writeFile("./text.txt", getNumbers.join("\r\n"));

  console.log(getNumbers);

  await lunchBrowser.close();
})();