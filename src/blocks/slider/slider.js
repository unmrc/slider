/**
 * @file Implementation of the slider block.
 */

// -------------------------- BEGIN MODULE VARIABLES --------------------------

// Block name
const BLOCK_NAME = 'slider';

// Element class names
const CLASSNAME = {
	BLOCK: BLOCK_NAME,
};

// Element selectors
const SELECTOR = {
	BLOCK: `.${BLOCK_NAME}`,
};

// Map of DOM elements
const elements = {};

// TODO: add code here

// --------------------------- END MODULE VARIABLES ---------------------------

// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

// TODO: add code here

// --------------------------- END UTILITY FUNCTIONS --------------------------

// ----------------------------- BEGIN DOM METHODS ----------------------------

// TODO: add code here

// ------------------------------ END DOM METHODS -----------------------------

// --------------------------- BEGIN EVENT HANDLERS ---------------------------

// TODO: add code here

// ---------------------------- END EVENT HANDLERS ----------------------------

// --------------------------- BEGIN PUBLIC METHODS ---------------------------

import Swiper from "swiper/bundle";

/**
 * Initialize the slider block.
 *
 * @return {boolean} true if the block is present on the page; false otherwise.
 */
export function initBlock() {
	const block = document.querySelector(SELECTOR.BLOCK);
	if (block == null) {
		return false;
	}
	
	var mySwiper = new Swiper('.swiper-container', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 5000,
		  },
		
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: 'true',
		},
		
		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		
		// And if we need scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
		},
	})
	
	return true;
}

// ---------------------------- END PUBLIC METHODS ----------------------------
