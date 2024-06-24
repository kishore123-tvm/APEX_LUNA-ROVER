const rover = document.querySelector('.moon-rover');
const moon = document.querySelector('.moon');

let roverPosition = 50;

function moveRover(direction) {
	if (direction === 'left') {
		if (roverPosition > 0) {
			roverPosition -= 10;
		}
	} else if (direction === 'right') {
		if (roverPosition < 100) {
			roverPosition += 10;
		}
	}
	
	rover.style.left = `${roverPosition}%`;
	
	checkWin();
}

function checkWin() {
	const roverLeft = rover.getBoundingClientRect().left;
	const moonLeft = moon.getBoundingClientRect().left;
	const distance = Math.abs(roverLeft - moonLeft);
	
	if (distance <= 20) {
		alert('Congratulations! Your rover sucessfully moving on the moon gravity');
	}
}

document.getElementById('left-btn').addEventListener('click', function() {
	moveRover('left');
});

document.getElementById('right-btn').addEventListener('click', function() {
	moveRover('right');
});
