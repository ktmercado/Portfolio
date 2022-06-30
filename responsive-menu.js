/* JavaScript file for responsive menu
   Code taken from P2, orginal source: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp */

   'use strict';

console.log('JavaScript is running');

function menuFunction() {
    // let menu = document.querySelector('responsiveMenu');
    var menu = document.getElementById('responsiveMenu');
    if (menu.className === 'nav') {
        menu.className += ' responsive';

        menu.setAttribute('aria-label', 'navigation item');
        menu.setAttribute('aria-expanded', 'true');
    } else {
        menu.className = 'nav';
        menu.setAttribute('aria-expanded', 'false');
    }
}