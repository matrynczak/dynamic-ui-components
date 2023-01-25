const footballItem = document.querySelector('.football');
const tennisItem = document.querySelector('.tennis');
const basketballItem = document.querySelector('.basketball');
const carRacingItem = document.querySelector('.car-racing');
const baseballItem = document.querySelector('.baseball');
const iceHockeyItem = document.querySelector('.ice-hockey');
const volleyballItem = document.querySelector('.volleyball');
const horseRacingItem = document.querySelector('.horse-racing');
const submenu = document.querySelector('.submenu');
const closeSubmenuButton = document.createElement('img');
const closeMenuButton = document.querySelector('.close-btn');
const hamburger = document.querySelector('#hamburger-icon');
const mainMenu = document.querySelector('.main-items');
const wrapper = document.querySelector('.wrapper');

const handleMenuDisplaying = () => {
    renderMenu();
    footballItem.addEventListener('click', () => renderSubmenu(footballData));
    tennisItem.addEventListener('click', () => renderSubmenu(tennisData));
    basketballItem.addEventListener('click', () => renderSubmenu(basketballData));
    carRacingItem.addEventListener('click', () => renderSubmenu(carRacingData));
    baseballItem.addEventListener('click', () => renderSubmenu(baseballData));
    iceHockeyItem.addEventListener('click', () => renderSubmenu(iceHockeyData));
    volleyballItem.addEventListener('click', () => renderSubmenu(volleyballData));
    horseRacingItem.addEventListener('click', () => renderSubmenu(horseRacingData));
    closeSubmenuButton.addEventListener('click', closeSubmenu);
    closeMenuButton.addEventListener('click', closeMenu)
};

const renderMenu = () => {
    hamburger.addEventListener('click', () => {
        wrapper.classList.add('displayed');
        wrapper.classList.remove('not-displayed');
        mainMenu.classList.add('displayed');
        mainMenu.classList.remove('not-displayed');
        hamburger.classList.add('not-displayed');
        closeMenuButton.classList.add('displayed');
        closeMenuButton.classList.remove('not-displayed');
    })
}

const renderSubmenu = (data) => {
    const submenuItems = document.createElement('ul');
    submenuItems.classList.add('sport-menu');

    data.forEach(item => {
        const sportItem = document.createElement('li');
        sportItem.classList.add(`item-${Object.keys(item)[0]}`);
        const link = document.createElement('a');
        link.textContent = Object.values(item)[0].title;
        link.setAttribute('href', Object.values(item)[0].link);
        sportItem.appendChild(link);
        submenuItems.appendChild(sportItem);
    })
    submenu.appendChild(submenuItems);

    closeSubmenuButton.setAttribute('src', './close-icon.webp');
    closeSubmenuButton.classList.add('close-btn');
    submenu.appendChild(closeSubmenuButton);

    submenu.classList.add('displayed');
    submenu.classList.remove('not-displayed');
}

const closeSubmenu = () => {
    const submenuItem = document.querySelector('[class*="-menu"]');
    submenu.classList.add('not-displayed');
    submenu.removeChild(submenuItem);
}

const closeMenu = () => {
    mainMenu.classList.add('not-displayed');
    hamburger.classList.add('displayed');
    hamburger.classList.remove('not-displayed');
    closeMenuButton.classList.add('not-displayed');
}

handleMenuDisplaying();

const footballData = [
    {
        ekstraklasa: {
            title: 'Ekstraklasa',
            link: 'https://ekstraklasa.org'
        },
    },
    {
        bundesliga: {
            title: 'Bundesliga',
            link: 'https://bundesliga.de'
        }
    }
];

const tennisData = [
    {
        man: {
            title: 'ATP',
            link: 'https://wp.pl'
        },
    },
    {
        woman: {
            title: 'WTA',
            link: 'https://onet.pl'
        }
    }
];

const basketballData = [
    {
        europe: {
            title: 'Euroleague',
            link: 'https://wp.pl'
        },
    },
    {
        usa: {
            title: 'NBA',
            link: 'https://onet.pl'
        }
    }
];

const carRacingData = [
    {
        poland: {
            title: 'Barbórka Race',
            link: 'https://wp.pl'
        },
    },
    {
        world: {
            title: 'Dakar Race',
            link: 'https://onet.pl'
        }
    }
];

const baseballData = [
    {
        usa: {
            title: 'NBL',
            link: 'https://wp.pl'
        },
    },
    {
        europe: {
            title: 'European League of Baseball',
            link: 'https://onet.pl'
        }
    }
];

const iceHockeyData = [
    {
        usa: {
            title: 'NHL',
            link: 'https://wp.pl'
        },
    },
    {
        german: {
            title: 'German League of Ice Hockey',
            link: 'https://onet.pl'
        }
    }
];

const volleyballData = [
    {
        poland: {
            title: 'PlusLiga',
            link: 'https://wp.pl'
        },
    },
    {
        fivb: {
            title: 'Nations League',
            link: 'https://onet.pl'
        }
    }
];

const horseRacingData = [
    {
        poland: {
            title: 'Warsaw Torwar Racing',
            link: 'https://wp.pl'
        },
    },
    {
        uk: {
            title: 'Kent',
            link: 'https://onet.pl'
        }
    }
];