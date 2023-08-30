const balloon = document.querySelector(".balloon");
const inflateButton = document.getElementById("inflate");
const deflateButton = document.getElementById("deflate");
const newBalloonButton = document.getElementById("newBalloon");

function adjustBalloonSize(increment) {
	let balloonComputedStyle = window.getComputedStyle(balloon);

	let balloonFontSize = parseFloat(balloonComputedStyle.fontSize);
	balloonFontSize *= increment;

	if (balloonFontSize >= 16 && balloonFontSize <= 30) {
		balloon.style.cssText = `font-size: ${balloonFontSize}px`;
	} else if (balloonFontSize > 30) {
		balloon.textContent = "💥";

		inflateButton.removeEventListener("click", inflateBalloon);

		deflateButton.removeEventListener("click", deflateBalloon);
	}
}

function balloonSizing(e) {
	if (e.keyCode === 38) {
		//keyCode works in numbers.  Not strings
		adjustBalloonSize(1.1);
	} else if (e.keyCode === 40 && balloon.textContent !== "💥") {
		adjustBalloonSize(0.9);
	}
}

function inflateBalloon() {
	adjustBalloonSize(1.1);
}

function deflateBalloon() {
	adjustBalloonSize(0.9);
}

document.addEventListener("keydown", balloonSizing);

inflateButton.addEventListener("click", inflateBalloon);
deflateButton.addEventListener("click", deflateBalloon);
newBalloonButton.addEventListener("click", () => {
	balloon.textContent = "🎈";
	balloon.style.cssText = "font-size: 16px";
	inflateButton.addEventListener("click", inflateBalloon);
	deflateButton.addEventListener("click", deflateBalloon);
});

/* My Previous Code
const balloon = document.querySelector(".balloon");
        const inflateButton = document.getElementById("inflate");
        const deflateButton = document.getElementById("deflate");
        const newBalloonButton = document.getElementById("newBalloon");

        adjustBalloonSize(1.10);

        function adjustBalloonSize(increment) {
            let balloonComputedStyle = window.getComputedStyle(balloon);
            let balloonFontSize = parseFloat(balloonComputedStyle.fontSize);
            balloonFontSize *= increment;
            if (balloonFontSize > 16 && balloonFontSize <= 30) {
                balloon.style.cssText = `font-size: ${balloonFontSize}px`;
            }
            console.log(balloon.style.cssText);
        }

        function balloonSizing(e) {
            let balloonComputedStyle = window.getComputedStyle(balloon);
            const balloonFontSize = parseFloat(balloonComputedStyle.fontSize);
            let incrementBalloonSize = (balloonFontSize * 1.10).toString() + "px";
            let decrementBalloonSize = (balloonFontSize - (balloonFontSize * 0.10).toString() + "px");
            
            if (e.keyCode === 38) {                         //keyCode works in numbers.  Not strings
                balloon.style.cssText = `font-size: ${incrementBalloonSize}`;
                if(balloonFontSize > 30) {
                    balloon.textContent = "💥";
                    document.removeEventListener("keydown", balloonSizing);
                }
            } else if (e.keyCode === 40 && balloonFontSize > 16 && balloon.textContent !== "💥") {
                balloon.style.cssText = `font-size: ${decrementBalloonSize}`;
            }
        }

        function inflateBalloon() {
            let balloonComputedStyle = window.getComputedStyle(balloon);
            let balloonFontSize = parseFloat(balloonComputedStyle.fontSize);
            let incrementBalloonSize = (balloonFontSize * 1.10).toString() + "px";
            let decrementBalloonSize = (balloonFontSize - (balloonFontSize * 0.10).toString() + "px");
            balloon.style.cssText = `font-size: ${incrementBalloonSize}`;
                if(balloonFontSize > 30) {
                    balloon.textContent = "💥";
                    inflateButton.removeEventListener("click", inflateBalloon);
                }
        }

        function deflateBalloon() {
            let balloonComputedStyle = window.getComputedStyle(balloon);
            const balloonFontSize = parseFloat(balloonComputedStyle.fontSize);
            let incrementBalloonSize = (balloonFontSize * 1.10).toString() + "px";
            let decrementBalloonSize = (balloonFontSize - (balloonFontSize * 0.10).toString() + "px");
            if (balloonFontSize > 16 && balloon.textContent !== "💥") {
                balloon.style.cssText = `font-size: ${decrementBalloonSize}`;
            }
        }

            

        document.addEventListener("keydown", balloonSizing);

        inflateButton.addEventListener("click", inflateBalloon);
        deflateButton.addEventListener("click", deflateBalloon);
        newBalloonButton.addEventListener("click", () => {
            balloon.textContent = "🎈";
            balloon.style.cssText = "font-size: 16px";
            inflateButton.addEventListener("click", inflateBalloon);
        })

        
        console.log(inflateButton.getBoundingClientRect())
*/
