import { homeButton, homeContent } from './webpage';
import Icon from './images/logo.png';

homeButton.textContent = 'Home';

const paragraph = document.createElement('p');
paragraph.classList.add('introduction');
homeContent.appendChild(paragraph);
paragraph.textContent =
    'Welcome to Flavorful Grind, where taste and quality collide! We are passionate about crafting delectable burgers that satisfy your cravings and ignite your taste buds. Our vibrant and inviting ambiance, coupled with exceptional service, creates an unforgettable dining experience. Join us and embark on a culinary journey filled with mouthwatering flavors that will leave you wanting more!';

const logo = new Image();
logo.src = Icon;
logo.alt = 'Logo';
logo.classList.add('logo');
homeContent.appendChild(logo);
