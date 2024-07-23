const articles = [
	{
		id: 1,
        title: 'Ransomware Attack Cripples Snickerville, OH',
        imgSrc: 'Snickersville.png',
        imgAlt: 'Snickersville thumbnail',
        description: 'Snickerville, OH, is facing a major crisis after a ransomware attack paralyzed the town\'s digital infrastructure. The attackers have demanded a hefty ransom in cryptocurrency to restore access to essential systems, leaving the town\'s services in disarray.'
	},
	{
		id: 2,
        title: 'Cyber Attack on Fakerville',
        imgSrc: 'FakerVille.png',
        imgAlt: 'FakerVille thumbnail',
        description: 'On July 22, 2024, the small town of Fakerville, FL, experienced a significant cyber attack that disrupted municipal services, caused widespread panic, and led to a temporary state of emergency. The attack was a sophisticated and coordinated effort that targeted the town\'s critical infrastructure, including the power grid, water supply, and emergency services communications.'	
	},
	{	
    	id: 3,
        title: 'Giant Rubber Duck Stolen from Wobbleton, NV',
        imgSrc: 'Wobbleton.png',
        imgAlt: 'Wobbleton thumbnail',
        description: 'The small town of Wobbleton, NV, is in an uproar after the theft of its beloved giant rubber duck statue. The 30-foot-tall duck, affectionately known as "Quacky," has been a local landmark and a favorite photo spot for tourists. Authorities are puzzled by how the massive statue was stolen and are actively seeking leads.'
	
	}
]
articles.forEach((article)=>{
	const id = article.id;
	const title = article.title;
	const desc = article.description;
	const image = article.imgSrc;
	const imgDesc = article.imgAlt;

  const section = document.createElement('section');
  section.className = 'article_id';
  section.id = id;


  const mainSection = document.createElement('section');
  mainSection.className = 'article';
  mainSection.innerHTML = `

	  <img src="${image}" alt="${imgDesc}">
	  <section class="article_text">
        <h1>${title}</h1>
        <p>${desc}</p>
      </section>
  `;

  section.appendChild(mainSection);

  document.getElementById('article-container').appendChild(section);

});