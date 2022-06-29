const i = document.querySelector('#iconpad');

const rand = (min, max) => {
	const rnd  = min + Math.random() * (max - min + 1);
	return Math.floor(rnd);
}



i.addEventListener('mouseenter', () => {
	
	i.style.left = `${rand(20, 70)}%`;
	i.style.top = `${rand(10, 70)}%`;
	
}
);