// Confirm file is linked to html
console.log("hello world");

// Dynamically set copyright year to automatically update
const handleCopyrightMessage = () => {
  let copyrightText = document.getElementById("copyright-text");
  let thisYear = new Date().toDateString().slice(11);
  copyrightText.prepend(
    `© ${thisYear} Dimiter Yordanov. All Rights Reserved. Powered by `
  );
};

const handleApiKey = () => {
  let apiBtn = document.getElementById("apiBtn");
  apiBtn.href = `https://api.dimitermusic.com/APIKEY=${process.env.API_KEY}/concerts`;
};

handleCopyrightMessage();
handleApiKey;
