/*
 * Liquid v1.0.0
 * © zosma180 - areaweb80@gmail.com
 * License: MIT
 */

class Liquid {
	index = 0;

	constructor() {
		this.init();
	}

	init() {
		this.slides = Array.from(document.getElementsByTagName('article'));
		this.progress = document.createElement('div');
		this.progress.classList.add('progress');
		document.body.appendChild(this.progress);

		this.slides.forEach(slide => {
			slide.addEventListener('animationend', ev => {
				if (this.slides[this.index] === ev.target) {
					ev.target.classList.add('active');
				} else {
					ev.target.classList.remove('active');
				}
			});
		});

		this.keyboard();

		const hash = Number(location.hash.replace('#', ''));
		const start = hash ? hash - 1 : this.index;
		this.slideTo(start);
	};

	keyboard() {
		document.addEventListener('keydown', ev => {
			if (ev.key === 'ArrowLeft') {
				this.slideTo(this.index - 1);
			} else if (ev.key === 'ArrowRight') {
				this.slideTo(this.index + 1);
			}
		});
	};

	slideTo(next) {
		if (next < 0 || next > this.slides.length - 1) { return; }

		const leaveAnimation = next >= this.index ? 'leave-backward' : 'leave-forward';
		const enterAnimation = next >= this.index ? 'enter-forward' : 'enter-backward';

		this.slides[this.index].style.animationName = leaveAnimation;
		this.slides[next].style.animationName = enterAnimation;

		this.index = next;
		location.hash = next + 1;

		const ratio = next / (this.slides.length - 1) * 100;
		this.progress.style.width = ratio + '%';
	};
}

let LIQUID = null;

document.addEventListener('DOMContentLoaded', () => {
	LIQUID = new Liquid();
});
