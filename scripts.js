document.addEventListener("DOMContentLoaded", function()
{
    const params = new URLSearchParams(window.location.search);
const articleId = params.get("id");

if (articleId) {
  const article = document.getElementById(`artical-${articleId}`);
  if (article) {
    article.classList.add("highlight");
    article.scrollIntoView({ behavior: "smooth" , block: "start" });
  }
}
});
document.getElementById('contact').addEventListener('click', function(event) {
    event.preventDefault(); 

    const teamInfo = document.getElementById('team-info');
    

    if (teamInfo.style.display === 'none') {

        const teamMembers = [
            { name: 'Mohammed Ali', number: '0980238314' },
            { name: 'Fatima Khalid', number: '0980238315' },
            { name: 'Ahmed Sami', number: '0980238316' }
        ];

     
        teamInfo.innerHTML = ''; 
        const ul = document.createElement('ul');
        teamMembers.forEach(member => {
            const li = document.createElement('li');
            li.textContent = `${member.name}: ${member.number}`;
            ul.appendChild(li);
        });


        teamInfo.appendChild(ul);
        teamInfo.style.display = 'block';
    } else {
        teamInfo.style.display = 'none';
    }
});