import { contactButton, contactContent } from './webpage';

contactButton.textContent = 'Contact';

function createContact() {
    const div = document.createElement('div');
    div.classList.add('contactDiv');
    for (let i = 0; i < 3; i++) {
        const paragraph = document.createElement('p');
        paragraph.classList.add('contactDetails');
        div.appendChild(paragraph);
    }
    contactContent.appendChild(div);
    const paragraph = document.querySelectorAll('.contactDiv .contactDetails');
    paragraph[0].textContent = '☎️  123-456-7890';
    paragraph[1].textContent = '📍    999 Lenox Rd, Brooklyn, KSA 11203, ASU';
    paragraph[2].textContent = '📧  FlavorfulGrind@email.com';
}

function createHours() {
    const div = document.createElement('div');
    const header = document.createElement('h1');
    const paragraph = document.createElement('p');
    div.classList.add('hoursDiv');
    header.classList.add('hoursHeader');
    paragraph.classList.add('hours');
    header.textContent = 'Hours';
    paragraph.innerHTML = `Monday: 8:00 a.m. - 6:00 p.m <br>
    Tuesday: 8:00 a.m. - 6:00 p.m <br>
    Wednesday: 8:00 a.m. - 6:00 p.m <br>
    Thursday: Closed <br>
    Friday: 8:00 a.m. - 6:00 p.m <br>
    Saturday: 8:00 a.m. - 10:00 p.m <br>
    Sunday: 8:00 a.m. - 10:00 p.m `;
    div.append(header, paragraph);
    contactContent.appendChild(div);
}

createContact();
createHours();
