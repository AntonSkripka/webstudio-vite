const nav_items = [
    { href: "./index.html", text: "Студія", active: true },
    { href: "./portfolio.html", text: "Портфоліо", active: false },
    { href: "./index.html", text: "Контакти", active: false }
];

const mobile_nav_items = [
    { href: "./index.html", text: "Студія", active: true },
    { href: "./portfolio.html", text: "Портфоліо", active: false },
    { href: "./index.html", text: "Контакти", active: false }
];

const contacts = [
    { href: "mailto:info@devstudio.com", icon: "mail", text: "info@devstudio.com" },
    { href: "tel:+38-096-111-11-11", icon: "smartphone", text: "+38 096 111 11 11" }
];

const mobile_contacts = [
    { href: "tel:+38-096-111-11-11", text: "+38 096 111 11 11" },
    { href: "mailto:info@devstudio.com", text: "info@devstudio.com" }
];

const mobile_social_links = [
    { href: "#", text: "Instagram" },
    { href: "#", text: "Twitter" },
    { href: "#", text: "Facebook" },
    { href: "#", text: "LinkedIn" }
];

const our_features_list = [
    {
        img: "../images/antenna.svg",
        title: "УВАГА ДО ДЕТАЛЕЙ",
        description: "Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."
    },
    {
        img: "../images/clock.svg",
        title: "ПУНКТУАЛЬНІСТЬ",
        description: "Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."
    },
    {
        img: "../images/diagram.svg",
        title: "ПЛАНУВАННЯ",
        description: "Так само консультація з широким активом значною мірою зумовлює."
    },
    {
        img: "../images/astronaut.svg",
        title: "СУЧАСНІ ТЕХНОЛОГІЇ",
        description: "Значимість цих проблем настільки очевидна, що реалізація планових завдань."
    }
];

const what_we_do_list = [
    { img: "./images/programming-1x.jpg", overlay: "Десктопні додатки" },
    { img: "./images/development-1x.jpg", overlay: "Мобільні додатки" },
    { img: "./images/design-1x.jpg", overlay: "Дизайнерські рішення" }
];

const regular_customers = [
    { width: "41px", height: "47px", icon: "yaco" },
    { width: "40px", height: "52px", icon: "tagline" },
    { width: "44px", height: "42px", icon: "company" },
    { width: "85px", height: "41px", icon: "foster_peters" },
    { width: "63px", height: "46px", icon: "brand" },
    { width: "94px", height: "44px", icon: "company_tagline" }
];

const footer_addresses = [
    { href: "./index.html", text: "м. Київ, пр-т Лесі Українки, 26", white: true },
    { href: "mailto:info@devstudio.com", text: "info@devstudio.com", white: false },
    { href: "tel:+38-096-111-11-11", text: "+38 096 111 11 11", white: false }
];

const footer_social_links = [
    { href: "#", icon: "instagram" },
    { href: "#", icon: "twitter" },
    { href: "#", icon: "facebook" },
    { href: "#", icon: "linkedin" }
];

const portfolio_filters = ["Усі", "Веб-сайти", "Додатки", "Дизайн", "Маркетинг"];

const portfolio_list = [
    { img: "./images/tehnohrak-mobile-1x.jpg", title: "Технохряк", type: "Веб-сайти" },
    { img: "./images/poster-mobile-1x.jpg", title: "Постер New Orlean vs Golden Star", type: "Дизайн" },
    { img: "./images/restaurant-mobile-1x.jpg", title: "Ресторан Seafood", type: "Додатки" },
    { img: "./images/prime-mobile-1x.jpg", title: "Проєкт Prime", type: "Маркетинг" },
    { img: "./images/boxes-mobile-1x.jpg", title: "Проєкт Boxes", type: "Додатки" },
    { img: "./images/inspiration-mobile-1x.jpg", title: "Inspiration has no Borders", type: "Веб-сайти" },
    { img: "./images/limited-mobile-1x.jpg", title: "Видання Limited Edition", type: "Дизайн" },
    { img: "./images/lab-mobile-1x.jpg", title: "Проєкт LAB", type: "Маркетинг" },
    { img: "./images/business-mobile-1x.jpg", title: "Growing Business", type: "Додатки" }
];

const commonOverlay = "Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.";

let what_we_do = {
    img: ["./images/programming-1x.jpg", "./images/development-1x.jpg", "./images/design-1x.jpg"],
    overlay: ["Десктопні додатки", "Мобільні додатки", "Дизайнерські рішення"]
};

for (const { img, overlay } of what_we_do_list) {
    console.log(`Service: ${overlay}, Image: ${img}`);
}

const team_list = [
    {
        img: "./images/igor-mobile-1x.jpg",
        title: "Ігор Дем'яненко",
        description: "Product Designer",
        social_links: [
            { href: "#", icon: "instagram" },
            { href: "#", icon: "twitter" },
            { href: "#", icon: "facebook" },
            { href: "#", icon: "linkedin" }
        ]
    },
    {
        img: "./images/olga-mobile-1x.jpg",
        title: "Ольга Рєпіна",
        description: "Frontend Developer",
        social_links: [
            { href: "#", icon: "instagram" },
            { href: "#", icon: "twitter" },
            { href: "#", icon: "facebook" },
            { href: "#", icon: "linkedin" }
        ]
    },
    {
        img: "./images/mykola-mobile-1x.jpg",
        title: "Микола Тарасов",
        description: "Marketing",
        social_links: [
            { href: "#", icon: "instagram" },
            { href: "#", icon: "twitter" },
            { href: "#", icon: "facebook" },
            { href: "#", icon: "linkedin" }
        ]
    },
    {
        img: "./images/mikhail-mobile-1x.jpg",
        title: "Михайло Єрмаков",
        description: "UI Designer",
        social_links: [
            { href: "#", icon: "instagram" },
            { href: "#", icon: "twitter" },
            { href: "#", icon: "facebook" },
            { href: "#", icon: "linkedin" }
        ]
    }
];


let social_links = [
    ["#", "#", "#", "#"],
    ["#", "#", "#", "#"],
    ["#", "#", "#", "#"],
    ["#", "#", "#", "#"]
];

let social_links2 = [
    {
        inst: "#",
        twit: "#",
        faceb: "#",
        linkedin: "#"
    },
    {
        inst: "#",
        twit: "#",
        faceb: "#",
        linkedin: "#"
    },
    {
        inst: "#",
        twit: "#",
        faceb: "#",
        linkedin: "#"
    },
    {
        inst: "#",
        twit: "#",
        faceb: "#",
        linkedin: "#"
    },
]

let team = {
    img: ["./images/igor-mobile-1x.jpg", "./images/olga-mobile-1x.jpg", "./images/mykola-mobile-1x.jpg", "./images/mikhail-mobile-1x.jpg"],
    title: ["Ігор Дем'яненко", "Ольга Рєпіна", "Микола Тарасов", "Михайло Єрмаков"],
    description: ["Product Designer", "Frontend Developer", "Marketing", "UI Designer"],
    social_links: social_links
};

let team2 = [
    {
        img: "./images/igor-mobile-1x.jpg",
        title: "Ігор Дем'яненко",
        description: "Product Designer",
        social_links: social_links2[0]
    },
    {
        img: "./images/olga-mobile-1x.jpg",
        title: "Ольга Рєпіна",
        description: "Frontend Developer",
        social_links: social_links2[1]
    },
    {
        img: "./images/mykola-mobile-1x.jpg",
        title: "Микола Тарасов",
        description: "Marketing",
        social_links: social_links2[2]
    },
    {
        img: "./images/mikhail-mobile-1x.jpg",
        title: "Михайло Єрмаков",
        description: "UI Designer",
        social_links: social_links2[3]
    },
];

function renderNavList(selector, items) {
    const navList = document.querySelector(selector);
    if (!navList) return;
    
    const markup = items
        .map(item => `
            <li class="nav-list__nav-item">
                <a class="nav-list__nav-link ${item.active ? 'nav-list__nav-link--active-link' : ''}" href="${item.href}">${item.text}</a>
            </li>
        `)
        .join("");
    
    navList.innerHTML = markup;
}

function renderContactsList(selector, items) {
    const contactsList = document.querySelector(selector);
    if (!contactsList) return;
    
    const markup = items
        .map(item => `
            <li class="contacts-list__item">
                <a class="contacts-list__link" href="${item.href}">
                    <svg class="contacts-list__svg" width="${item.icon === 'mail' ? '16px' : '10px'}" height="${item.icon === 'mail' ? '12px' : '16px'}">
                        <use href="./images/symboldefs.svg#${item.icon}"></use>
                    </svg>
                    ${item.text}
                </a>
            </li>
        `)
        .join("");
    
    contactsList.innerHTML = markup;
}

function renderMobileNavList(selector, items) {
    const navList = document.querySelector(selector);
    if (!navList) return;
    
    const markup = items
        .map(item => `
            <li class="bnav-list__nav-item">
                <a class="bnav-list__nav-link ${item.active ? 'bnav-list__nav-link--active' : ''}" href="${item.href}">${item.text}</a>
            </li>
        `)
        .join("");
    
    navList.innerHTML = markup;
}

function renderMobileContactsList(selector, items) {
    const contactsList = document.querySelector(selector);
    if (!contactsList) return;
    
    const markup = items
        .map((item, idx) => `
            <li class="bcontacts-list__contacts-item">
                <a class="bcontacts-list__link${idx === 0 ? '1' : '2'}" href="${item.href}">${item.text}</a>
            </li>
        `)
        .join("");
    
    contactsList.innerHTML = markup;
}

function renderMobileSocialList(selector, items) {
    const socialList = document.querySelector(selector);
    if (!socialList) return;
    
    const markup = items
        .map(item => `
            <li class="bsocial-list__social-item">
                <a class="bsocial-list__social-link" href="${item.href}">${item.text}</a>
            </li>
        `)
        .join("");
    
    socialList.innerHTML = markup;
}

function renderFeaturesList(selector, items) {
    const featuresList = document.querySelector(selector);
    if (!featuresList) return;
    
    const markup = items
        .map(item => `
            <li class="our-features-list__item">
                <h3 class="our-features-list__title">${item.title}</h3>
                <p class="our-features-list__description">${item.description}</p>
            </li>
        `)
        .join("");
    
    featuresList.innerHTML = markup;
}

function renderWhatWeDoList(selector, items) {
    const whatWeDoList = document.querySelector(selector);
    if (!whatWeDoList) return;
    
    const markup = items
        .map(item => `
            <li class="what-we-do-list__item">
                <picture class="what-we-do-list__img">
                    <img src="${item.img}" alt="${item.overlay}">
                </picture>
                <h3 class="what-we-do-list__overlay">${item.overlay}</h3>
            </li>
        `)
        .join("");
    
    whatWeDoList.innerHTML = markup;
}

function renderRegularCustomersList(selector, items) {
    const customersList = document.querySelector(selector);
    if (!customersList) return;
    
    const markup = items
        .map(item => `
            <li class="regular-customers-list__item">
                <a class="regular-customers-list__link" href="#">
                    <svg class="regular-customers-list__svg" width="${item.width}" height="${item.height}">
                        <use href="./images/symboldefs.svg#${item.icon}"></use>
                    </svg>
                </a>
            </li>
        `)
        .join("");
    
    customersList.innerHTML = markup;
}

function renderAddressList(selector, items) {
    const addressList = document.querySelector(selector);
    if (!addressList) return;
    
    const markup = items
        .map(item => `
            <li class="address-list__item">
                <a class="address-list__link ${item.white ? 'address-list__link--white' : ''}" href="${item.href}">${item.text}</a>
            </li>
        `)
        .join("");
    
    addressList.innerHTML = markup;
}

function renderFooterSocialList(selector, items) {
    const socialList = document.querySelector(selector);
    if (!socialList) return;
    
    const markup = items
        .map(item => `
            <li class="join-us-list__item">
                <a class="join-us-list__link" href="${item.href}">
                    <svg class="join-us-list__svg" width="20px" height="20px">
                        <use href="./images/symboldefs.svg#${item.icon}"></use>
                    </svg>
                </a>
            </li>
        `)
        .join("");
    
    socialList.innerHTML = markup;
}

function renderTeamList(selector, items) {
    const teamList = document.querySelector(selector);
    if (!teamList) return;
    
    const markup = items
        .map(member => `
            <li class="team-list__item">
                <img class="team-list__img" src="${member.img}" alt="Фото ${member.title}">
                <h3 class="team-list__title">${member.title}</h3>
                <p class="team-list__description">${member.description}</p>
                <ul class="team-list__social-list">
                    ${member.social_links.map(link => `
                        <li class="team-list__social-item">
                            <a class="team-list__social-link" href="${link.href}">
                                <svg class="team-list__social-svg" width="20px" height="20px">
                                    <use href="./images/symboldefs.svg#${link.icon}"></use>
                                </svg>
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </li>
        `)
        .join("");
    
    teamList.innerHTML = markup;
}

function renderPortfolioFilters(selector, items) {
    const filtersList = document.querySelector(selector);
    if (!filtersList) return;
    
    const markup = items
        .map((item, idx) => `
            <li class="list-first__item-first">
                <button class="list-first__button">${item}</button>
            </li>
        `)
        .join("");
    
    filtersList.innerHTML = markup;
}

function renderPortfolioProjects(selector, items) {
    const projectsList = document.querySelector(selector);
    if (!projectsList) return;
    
    const markup = items
        .map(project => `
            <li class="list-second__item-second">
                <a href="#" class="list-second__item-link">
                    <div class="list-second__card-overlay-box">
                        <picture class="list-second__project-img">
                            <img src="${project.img}" alt="${project.title}">
                        </picture>
                        <p class="list-second__img-overlay">${commonOverlay}</p>
                    </div>
                    <div class="list-second__card-text-box">
                        <p class="list-second__project-title">${project.title}</p>
                        <p class="list-second__project-description">${project.type}</p>
                    </div>
                </a>
            </li>
        `)
        .join("");
    
    projectsList.innerHTML = markup;
}

const isPortfolioPage = document.querySelector('.portfolio__main') !== null;

if (isPortfolioPage) {
    const portfolioNav = nav_items.map((item, idx) => ({
        ...item,
        active: idx === 1
    }));
    renderNavList('.nav-list', portfolioNav);
    
    const portfolioMobileNav = mobile_nav_items.map((item, idx) => ({
        ...item,
        active: idx === 1
    }));
    renderMobileNavList('.bnav-list', portfolioMobileNav);
} else {
    renderNavList('.nav-list', nav_items);
    renderMobileNavList('.bnav-list', mobile_nav_items);
}

renderContactsList('.contacts-list', contacts);
renderMobileContactsList('.bcontacts-list', mobile_contacts);
renderMobileSocialList('.bsocial-list', mobile_social_links);

if (!isPortfolioPage) {
    renderFeaturesList('.our-features-list', our_features_list);
    renderWhatWeDoList('.what-we-do-list', what_we_do_list);
    renderTeamList('.team-list', team_list);
    renderRegularCustomersList('.regular-customers-list', regular_customers);
}

if (isPortfolioPage) {
    renderPortfolioFilters('.list-first', portfolio_filters);
    renderPortfolioProjects('.list-second', portfolio_list);
}

renderAddressList('.address-list', footer_addresses);
renderFooterSocialList('.join-us-list', footer_social_links);