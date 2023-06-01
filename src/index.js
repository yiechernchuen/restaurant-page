import './styles.css';
import { homeContent, menuContent, contactContent } from './webpage.js';
import './home';
import './menu';
import './contact';

function switchTab() {
    const button = document.querySelectorAll('.navButton');
    button.forEach((item) => {
        item.addEventListener('click', (e) => {
            if (e.target.textContent === 'Home') {
                homeContent.style.display = 'flex';
                menuContent.style.display = 'none';
                contactContent.style.display = 'none';
            } else if (e.target.textContent === 'Menu') {
                homeContent.style.display = 'none';
                menuContent.style.display = 'flex';
                contactContent.style.display = 'none';
            } else if (e.target.textContent === 'Contact') {
                homeContent.style.display = 'none';
                menuContent.style.display = 'none';
                contactContent.style.display = 'block';
            }
        });
    });
}

switchTab();
