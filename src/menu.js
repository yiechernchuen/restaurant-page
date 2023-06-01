import { menuButton, menuContent } from './webpage';
import burger1 from './images/burgers/Classic_BBQ_Bacon_Burger.jpg';
import burger2 from './images/burgers/Gourmet_Truffle_Burger.jpg';
import burger3 from './images/burgers/Mediterranean_Veggie_Burger.jpg';
import burger4 from './images/burgers/Southwest_Fiesta_Burger.jpg';
import burger5 from './images/burgers/Umami_Teriyaki_Chicken_Burger.jpg';

menuButton.textContent = 'Menu';
const burgers = [burger1, burger2, burger3, burger4, burger5];
for (let i = 0; i < 5; i++) {
    let div1 = document.createElement('div');
    let div2 = document.createElement('div');
    let header = document.createElement('h1');
    let paragraph = document.createElement('p');
    let img = new Image();
    div1.classList.add('menuContainer');
    div2.classList.add('menuDiv');
    header.classList.add('menuHeader');
    paragraph.classList.add('menuDesc');
    img.classList.add('menuImg');
    img.src = burgers[i];
    div2.append(header, paragraph);
    div1.append(img, div2);
    menuContent.append(div1);
}

const menuHeader = document.querySelectorAll('.menuHeader');
menuHeader[0].textContent = 'Classic BBQ Bacon Burger';
menuHeader[1].textContent = 'Gourmet Truffle Burger';
menuHeader[2].textContent = 'Mediterranean Veggie Burger';
menuHeader[3].textContent = 'Southwest Fiesta Burger';
menuHeader[4].textContent = 'Umami Teriyaki Chicken Burger';

const menuDesc = document.querySelectorAll('.menuDesc');
menuDesc[0].textContent =
    'A timeless favorite with a smoky twist. Our Classic BBQ Bacon Burger features a juicy beef patty smothered in tangy barbecue sauce, topped with crispy bacon, melted cheddar cheese, crispy onion straws, lettuce, and tomato.';
menuDesc[1].textContent =
    'Indulge in the ultimate luxury with our gourmet truffle burger. A succulent Wagyu beef patty infused with black truffle oil, topped with melted Gruyere cheese, caramelized onions, sautéed mushrooms, arugula, and truffle aioli.';
menuDesc[2].textContent =
    'A vegetarian delight inspired by the flavors of the Mediterranean. A homemade falafel patty topped with tangy tzatziki sauce, crumbled feta cheese, sliced cucumbers, roasted red peppers, mixed greens, and a drizzle of lemon-dill dressing.';
menuDesc[3].textContent =
    'Take your taste buds on a zesty adventure with our Southwest Fiesta Burger. A juicy Angus beef patty topped with melted pepper jack cheese, guacamole, roasted corn salsa, crispy tortilla strips, chipotle mayo, and fresh cilantro. ';
menuDesc[4].textContent =
    'Experience the umami explosion of our Teriyaki Chicken Burger. Grilled chicken breast marinated in a savory teriyaki glaze, topped with grilled pineapple, Swiss cheese, lettuce, tomato, and teriyaki mayo. ';
