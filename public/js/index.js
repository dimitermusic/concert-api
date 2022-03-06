// Confirm file is linked to html
console.log('hello world');

// Dynamically set copyright year to automatically update
const handleCopyrightMessage = () => {

    let copyrightText = document.getElementById('copyright-text')
    let thisYear = new Date().toDateString().slice(11);
    let githubLink = document.createElement('a')

    copyrightText.textContent = `© ${thisYear} Dimiter Yordanov. All Rights Reserved. Powered by `;

    // Add link to dynamically created copyright text
    githubLink.textContent = 'Dimiter Yordanov.'
    githubLink.href = 'https://www.github.com/dimitermusic'
    githubLink.target = '_blank'
    githubLink.classList.add('github-link')
    copyrightText.appendChild(githubLink)


}

handleCopyrightMessage();