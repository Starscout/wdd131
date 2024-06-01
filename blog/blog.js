const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '****'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
			"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his \"Aunt Pol\" and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
			"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
]
articles.forEach((article)=>{
	const id = article.id;
	const title = article.title;
	const date = article.date;
	const desc = article.description;
	const image = article.imgSrc;
	const imgDesc = article.imgAlt;
	const ages = article.ages;
	const genre = article.genre;
	const stars = article.stars;

  const section = document.createElement('section');
  section.className = 'book_id';
  section.id = id;

  const leftSection = document.createElement('section');
  leftSection.className = 'left';
  leftSection.innerHTML = `
	  <h3 id="date">${date}</h3>
	  <h4 id="age_range">${ages}</h4>
	  <h4 id="genre">${genre}</h4>
	  <h4 id="rating">${stars}</h4>
  `;

  const mainSection = document.createElement('section');
  mainSection.className = 'main';
  mainSection.innerHTML = `
	  <h2 id="title">${title}</h2>
	  <img id="book_image" src="${image}" alt="${imgDesc}">
	  <p id="description">${desc}</p>
  `;

  const rightSection = document.createElement('section');
  rightSection.className = 'right';
  rightSection.innerHTML = `<p>Filters will go here</p>`;

  section.appendChild(leftSection);
  section.appendChild(mainSection);
  section.appendChild(rightSection);

  document.getElementById('book-container').appendChild(section);

});