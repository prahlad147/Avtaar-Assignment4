let clickedCard = null;
// let preventClick = false;
let combosfound = 0;
let player1 = 0;
let player2 = 0;

const colors = [
    'pink',
    'yellow',
    'red',
    'cyan',
    'blue',
    'teal',
    'orange',
    'green',
    'black',
    'orangered',
    'blueviolet',
    'cyan',
    'azure',
    'bisque',
    'brown',
    'cadetBlue',
    'chocolate',
    'cornflowerblue'
]

const cards = [...document.querySelectorAll('.card')];

for (let color of colors) {
    const cardAIndex = parseInt(Math.random() * cards.length);
    const cardA = cards[cardAIndex];
    cards.splice(cardAIndex, 1);
    cardA.className += ` ${color}`
    cardA.setAttribute(`data-color`, color);

    const cardBIndex = parseInt(Math.random() * cards.length);
    const cardB = cards[cardBIndex];
    cards.splice(cardBIndex, 1);
    cardB.className += ` ${color}`
    cardB.setAttribute(`data-color`, color);
}

function onCardClicked(e) {
    const target = e.currentTarget;

    if (target === clickedCard || target.className.includes('done')) {
        return;
    }

    // console.log(target.className);
    target.className = target.className.replace('color-hidden', '').trim();
    target.className += ' done';

    // console.log(target.getAttribute('data-color'));

    if (!clickedCard) {
        clickedCard = target;
    } else if (clickedCard) {
        if (clickedCard.getAttribute('data-color') === target.getAttribute('data-color')) {
            // clickedCard.className += ' done';
            // target.className = +' done';
            // console.log("Cards are equal");
            clickedCard = null;
            combosfound++;
            // player1++;
            // console.log(player1);
            // preventClick = true;
        } else {

            // console.log("Cards are not equal");
            setTimeout(() => {
                clickedCard.className = clickedCard.className.replace('done', '').trim() + 'color-hidden';
                target.className = target.className.replace('done', '').trim() + 'color-hidden';

                clickedCard = null;
                // preventClick = false;
            }, 300);
        }


    }
    if (combosfound === 12) {
        alert("You Win");
    }


}