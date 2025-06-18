const cards = [
    { type: "basic", id: 1, flipped: false, user: null },
    { type: "basic", id: 2, flipped: false, user: null },
    { type: "basic", id: 3, flipped: false, user: null },
    { type: "basic", id: 4, flipped: false, user: null },
    { type: "basic", id: 5, flipped: false, user: null },
    { type: "basic", id: 6, flipped: false, user: null },

    { type: "medium", id: 7, flipped: false, user: null },
    { type: "medium", id: 8, flipped: false, user: null },
    { type: "medium", id: 9, flipped: false, user: null },
    { type: "medium", id: 10, flipped: false, user: null },
    { type: "medium", id: 11, flipped: false, user: null },

    { type: "epic", id: 12, flipped: false, user: null },
    { type: "epic", id: 13, flipped: false, user: null },
    { type: "epic", id: 14, flipped: false, user: null },
    { type: "epic", id: 15, flipped: false, user: null },
    { type: "epic", id: 16, flipped: false, user: null },
    { type: "epic", id: 17, flipped: false, user: null },

    { type: "legend", id: 18, flipped: false, user: null },
    { type: "legend", id: 19, flipped: false, user: null },
    { type: "legend", id: 20, flipped: false, user: null },
    { type: "legend", id: 21, flipped: false, user: null },
    { type: "legend", id: 22, flipped: false, user: null },

    { type: "superLegend", id: 23, flipped: false, user: null },
    { type: "superLegend", id: 24, flipped: false, user: null },
    { type: "superLegend", id: 25, flipped: false, user: null },
    { type: "superLegend", id: 26, flipped: false, user: null },
    { type: "superLegend", id: 27, flipped: false, user: null },


    { type: "megaLegend", id: 28, flipped: false, user: null },
    { type: "megaLegend", id: 29, flipped: false, user: null },
    { type: "megaLegend", id: 30, flipped: false, user: null },
    { type: "megaLegend", id: 31, flipped: false, user: null },
    { type: "megaLegend", id: 32, flipped: false, user: null },

    { type: "mythic", id: 33, flipped: false, user: null },
    { type: "mythic", id: 34, flipped: false, user: null },
    { type: "mythic", id: 35, flipped: false, user: null },
    { type: "mythic", id: 36, flipped: false, user: null },
    { type: "mythic", id: 37, flipped: false, user: null },

    { type: "monochromatic", id: 38, flipped: false, user: null },
    { type: "monochromatic", id: 39, flipped: false, user: null },
    { type: "monochromatic", id: 40, flipped: false, user: null },
    { type: "monochromatic", id: 41, flipped: false, user: null },
    { type: "monochromatic", id: 42, flipped: false, user: null },

    { type: "emerald", id: 43, flipped: false, user: null },
    { type: "emerald", id: 44, flipped: false, user: null },
    { type: "emerald", id: 45, flipped: false, user: null },
    { type: "emerald", id: 46, flipped: false, user: null },
    { type: "emerald", id: 47, flipped: false, user: null },

    { type: "bonus", additionalClass: "bonus1", id: 48, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus2", id: 49, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus3", id: 50, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus4", id: 51, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus5", id: 52, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus6", id: 53, flipped: false, user: null },
    { type: "bonus", additionalClass: "bonus7", id: 54, flipped: false, user: null },

    { type: "worstCard", additionalClass: "worstCard1", id: 55, flipped: false, user: null },
    { type: "worstCard", additionalClass: "worstCard2", id: 56, flipped: false, user: null },
    { type: "worstCard", additionalClass: "worstCard3", id: 57, flipped: false, user: null },
    { type: "worstCard", additionalClass: "worstCard4", id: 58, flipped: false, user: null },
    { type: "worstCard", additionalClass: "worstCard5", id: 59, flipped: false, user: null },
    { type: "worstCard", additionalClass: "worstCard6", id: 60, flipped: false, user: null },
]

const cardsObj = {
    basic: {
        count: 6,
        ballForOne: 1,
    },
    epic: {
        count: 6,
        ballForOne: 3,
    },
    medium: {
        count: 5,
        ballForOne: 2,
    },
    legend: {
        count: 5,
        ballForOne: 4,
    },
    superLegend: {
        count: 5,
        ballForOne: 5,
    },
    megaLegend:{
        count: 5,
        ballForOne: 6,
    },
    mythic: {
        count: 5,
        ballForOne: 7,

    },
    monochromatic: {
        count: 5,
        ballForOne: 8,
    },
    emerald: {
        count: 5,
        ballForOne: 9,
    },
    worstCard: {
        count: 6,
        ballForOne: -2,
    },
    bonus: {
        count: 7,
        ballForOne: 2,
    },
}

const users = [
    {
        name: 'user1',
        cards: [  ],
        count: 0
    },
    {
        name: 'user2',
        cards:   [  ],
        count: 0
    },
    {
        name: 'user3',
        cards:   [  ],
        count: 0
    },
    {
        name: 'user4',
        cards:   [  ],
        count: 0
    },
    {
        name: 'user5',
        cards:   [  ],
        count: 0
    },
    {
        name: 'user6',
        cards:  [  ],
        count: 0
    }
]

const startCards = shuffle(cards);
const stepButton = document.querySelector('#step');
const startCradsLength = startCards.length;
const currentStatus = {
    currentUser: null,
    finish: false,
}


function nextUser() {
    const currentUserIndex = users.findIndex(x=> x === currentStatus.currentUser);
    const nextUserIndex = currentUserIndex + 1 <= users.length - 1 ? currentUserIndex + 1 : 0;
    return users[nextUserIndex];
}
function shuffle(array) {
   return  array.sort(() => Math.random() - 0.5);
}

function updateStatus() {
    currentStatus.currentUser = nextUser();
    const statusElement = document.querySelector('.status');
    statusElement.innerHTML = '';
    const userElement = document.createElement('div');
    userElement.classList.add('status');
    userElement.innerHTML = `
        Cейчас ходит: ${currentStatus.currentUser.name}
    `;
    statusElement.appendChild(userElement);
}
function updateUsers() {
    const usersElement = document.querySelector('.users');
    usersElement.innerHTML = '';
    users.forEach((user) => {
        const userElement = document.createElement('div');
        userElement.classList.add('user');
        userElement.innerHTML = `
            <div class="name">${user.name}</div>
            <div class="cards-count"><span>Кол-во карт:</span>${user.cards.length}</div>
            <div class="count"><span>Текущий счет:</span>${user.count}</div>`
        ;
        usersElement.appendChild(userElement);
    })
}


function updateCards() {
    const list = document.querySelector('.list');
    list.innerHTML = '';
    const userCards = users.reduce((acum, user) => {
        acum.push(...user.cards);
        return acum;
    }, [])

    startCards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.classList.add(card.flipped ? "flipped" : "empty");
        cardElement.classList.add(card.type);
        const uniqClass = `${card.type}-${card.id}`;
        cardElement.classList.add(uniqClass);
        cardElement.onclick = ($event) => {
            $event.stopPropagation();
            cardElement.classList.toggle('empty');
        }
        if (card.additionalClass) {
            cardElement.classList.add(card.additionalClass);
        }
        cardElement.innerHTML = card.type;
        list.appendChild(cardElement);
    });
}




function finish() {
    let winner = users[0];
   
    users.forEach((user) => {
        if (winner.count < user.count) {
            winner = user;
        }
    });

    let tie = users.find((x) => x.count === winner.count && winner.name !== x.name);
    if (tie) {
        alert('Ничья ' + winner.name + ' и ' + tie.name)
    } else {
        alert('Выиграл ' + winner.name)
    }
    currentStatus.finishStatus = true;
   
}

function findCardToogle(card, prop) {
   const currentCard = document.querySelector(`.${card.type}-${card.id}`);
   currentCard.classList.toggle(prop);
}
function nextCard() {
    return startCards.find(x => x.flipped === false);
}
function step() {
    if (currentStatus.finishStatus) {
        return;
    }
    users.forEach((user, index) => {
        if (startCards.length === 0) {
            return;
        }
        const card = nextCard();
        if(card) {
            card.user = user;
            card.flipped = true;
        }
     
        user.count += cardsObj[card.type].ballForOne;
        user.cards.push(card);

       // user.count += cardsObj[card.type].ballForOne;

        if (card.additionalClass) {
            const nextUser = index + 1;

            switch (card.additionalClass) {
                case "bonus1": 
                    let firstCard = user.cards.shift();
                    let nextUserCard;
                     if (users[nextUser]) {
                        nextUserCard = users[index + 1].cards.shift();
                        users[index + 1].cards.push(firstCard)
                    } else {
                        nextUserCard = users[0].cards.shift();
                        users[0].cards.push(firstCard)
                    }
                    user.cards.push(nextUserCard);
                    console.log('bonus1');
                    break;
                case "bonus2": 
                    const card1 = nextCard();
                    // TODO: 
                    card1.user = user;
                    card1.flipped = true;
                    user.cards.push(card1);

                    const card2 = nextCard();
                    // TODO: 
                    card2.user = user;
                    card2.flipped = true;
                    user.cards.push(card2);


                     console.log('bonus2');
                    break;
                case "bonus3": 
                    if (users[nextUser]) {
                         users[index + 1].cards.shift();
                    } else {
                        users[0].cards.shift();
                    }
                     console.log('bonus3');
                    break;
                case "bonus4": 
                    const flipCard = startCards[startCards.length - 1];
                    flipCard.flipped = true;
                    setTimeout((card) => {
                        findCardToogle(card, "flipped");
                         findCardToogle(card, "empty");
                    }, 3000, flipCard)
                    console.log('Bonus4')
                    break;
                case "bonus5":
                    const card3 = startCards[0];
                    card3.user = user;
                    card3.flipped = true;

                    user.cards.push(card3);
                    console.log('bonus5');
                    break;
                case "bonus6": 
                    let firstCard1 = user.cards.shift();
                    let secondCard1 = user.cards.shift();
                    let nextUserCard1;
                    let nextUserCard2;
                     if (users[nextUser]) {
                        nextUserCard1 = users[index + 1].cards.shift();
                        nextUserCard2 = users[index + 1].cards.shift();
                        users[index + 1].cards.push(firstCard1)
                        users[index + 1].cards.push(secondCard1)
                    } else {
                        nextUserCard1 = users[0].cards.shift();
                         nextUserCard2 = users[0].cards.shift();
                        users[0].cards.push(firstCard1)
                         users[0].cards.push(secondCard1)
                    }
                    user.cards.push(nextUserCard1);
                    user.cards.push(nextUserCard2);
                    console.log('bonus6');
                    break;
                case "bonus7":
                     if (users[nextUser]) {
                        let bonus7 = users[index + 1].cards.shift();
                         user.cards.push(bonus7);
                     } else {
                        let bonus7 = users[0].cards.shift();
                        user.cards.push(bonus7);
                     }
                     console.log('bonus7');
                    break;
                case "worstCard1":
                    const medium = [];
                    user.cards.forEach((card, index) => {
                        if (card.type === 'medium') {
                            medium.push(card);
                            user.cards.splice(index, 1);
                        }
                    });
                     if (users[nextUser]) {
                        users[nextUser].cards.push(...medium)   
                    } else {
                        users[0].cards.push(...medium)      
                    }
                    console.log('worstCard1');
                    break;
                case "worstCard2":
                    const epic = [];
                    user.cards.forEach((card, index) => {
                        if (card.type === 'epic' && epic.length === 0) {
                            epic.push(card);
                            user.cards.splice(index, 1);
                        }
                    });
                    console.log('worstCard2');
                    break;
                case "worstCard3":
                    const legend = [];
                    user.cards.forEach((card, index) => {
                        if (card.type === 'legend' && legend.length < 2) {
                            legend.push(card);
                            user.cards.splice(index, 1);
                        }
                    });
                    console.log('worstCard3');
                    break;
                case "worstCard4":
                    break;
                case "worstCard5":
                    break;
                case "worstCard6":
                    const legend1 = [];
                    user.cards.forEach((card, index) => {
                        if (card.type === 'legend' && legend1.length === 0) {
                            legend1.push(card);
                            user.cards.splice(index, 1);
                        }
                    });
                     if (users[nextUser]) {
                        users[nextUser].cards.push(legend1)   
                    } else {
                        users[0].cards.push(legend1)      
                    }
                    console.log('worstCard6');
                    break;


            }
        }
        // Если bonus +  карты
        // Если Worst - lose one epic card - в отбой
        //

    })
    updateCards();
    updateUsers();
    updateStatus();

    
   if(startCards.length === 0 || startCards.length < users.length) {
       finish();
   }
}
stepButton.addEventListener("click", (e) => {
    e.preventDefault();
    step();
})
function init() {
    updateCards();
    updateUsers();
    updateStatus();
}
function start() {
    step();
}
init();
start();
