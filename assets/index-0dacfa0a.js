/* empty css                 */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();//! Бєк-дроп з модальним вікном
const y=document.querySelector("[data-modal-open]"),b=document.querySelector("[data-modal]"),L=document.querySelector("[data-modal-close]"),r=document.querySelector("[modal-form]"),k=r.querySelector("[modal-submit]"),h=r.querySelectorAll("[required]");y.addEventListener("click",_);L.addEventListener("click",_);function _(){b.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}const $=r.querySelector('input[name="tel"]'),j=r.querySelector('input[name="email"]'),w=/^\+\d{1,3}-\d{2,3}-\d{3}-\d{2}-\d{2}$/,S=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,a=(e,s)=>{let t=e;e.closest(".modal__input")?t=e.closest(".modal__input"):e.classList.contains("modal__textarea-comment")?t=e:e.type==="checkbox"&&(t=e.closest(".modal__label-comment")),p(e);const o=document.createElement("p");o.classList.add("error-message"),o.textContent=s,t&&t.after(o)},p=e=>{let s=e;e.closest(".modal__input")?s=e.closest(".modal__input"):e.type==="checkbox"?s=e.closest(".modal__label-comment"):e.classList.contains("modal__textarea-comment")&&(s=e);const t=s.nextElementSibling;t&&t.classList.contains("error-message")&&t.remove()},q=(e,s)=>{let t=null;e.closest(".modal__input")?t=e.closest(".modal__input"):e.classList.contains("modal__textarea-comment")&&(t=e),t&&(s?t.classList.add("is-valid"):t.classList.remove("is-valid"))},c=()=>{let e=!0;h.forEach(s=>{p(s);let t=!0;s.type!=="checkbox"&&s.value.trim()===""&&(t=!1,a(s,"Поле повинно бути заповнено.")),s.type==="checkbox"&&!s.checked&&(t=!1),s===$&&s.value.trim()!==""&&(w.test(s.value)||(t=!1,a(s,"Номер телефону некоректний. Формат: +XX-XXX-XXX-XX-XX."))),s===j&&s.value.trim()!==""&&(S.test(s.value)||(t=!1,a(s,"Адреса некорректна."))),q(s,t),t||(e=!1)}),k.disabled=!e};c();h.forEach(e=>{e.type==="checkbox"?e.addEventListener("change",c):e.addEventListener("input",c)});r.addEventListener("submit",e=>{e.preventDefault(),console.log(e.target.elements.name.value),console.log(e.target.elements.tel.value),console.log(e.target.elements.email.value),console.log(e.target.elements.comment.value),console.log(e.target.elements.checkbox.value),e.target.reset()});//! Burger
const M=document.querySelector("[data-burger-open]"),T=document.querySelector("[data-burger]"),H=document.querySelector("[data-burger-close]");M.addEventListener("click",v);H.addEventListener("click",v);function v(){T.classList.toggle("displaynone"),document.body.classList.toggle("no-scroll")}const d=[{href:"./index.html",text:"Студія",active:!0},{href:"./portfolio.html",text:"Портфоліо",active:!1},{href:"./index.html",text:"Контакти",active:!1}],f=[{href:"./index.html",text:"Студія",active:!0},{href:"./portfolio.html",text:"Портфоліо",active:!1},{href:"./index.html",text:"Контакти",active:!1}],P=[{href:"mailto:info@devstudio.com",icon:"mail",text:"info@devstudio.com"},{href:"tel:+38-096-111-11-11",icon:"smartphone",text:"+38 096 111 11 11"}],X=[{href:"tel:+38-096-111-11-11",text:"+38 096 111 11 11"},{href:"mailto:info@devstudio.com",text:"info@devstudio.com"}],B=[{href:"#",text:"Instagram"},{href:"#",text:"Twitter"},{href:"#",text:"Facebook"},{href:"#",text:"LinkedIn"}],I=[{img:"../images/antenna.svg",title:"УВАГА ДО ДЕТАЛЕЙ",description:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{img:"../images/clock.svg",title:"ПУНКТУАЛЬНІСТЬ",description:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{img:"../images/diagram.svg",title:"ПЛАНУВАННЯ",description:"Так само консультація з широким активом значною мірою зумовлює."},{img:"../images/astronaut.svg",title:"СУЧАСНІ ТЕХНОЛОГІЇ",description:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],x=[{img:"./images/programming-1x.jpg",overlay:"Десктопні додатки"},{img:"./images/development-1x.jpg",overlay:"Мобільні додатки"},{img:"./images/design-1x.jpg",overlay:"Дизайнерські рішення"}],F=[{width:"41px",height:"47px",icon:"yaco"},{width:"40px",height:"52px",icon:"tagline"},{width:"44px",height:"42px",icon:"company"},{width:"85px",height:"41px",icon:"foster_peters"},{width:"63px",height:"46px",icon:"brand"},{width:"94px",height:"44px",icon:"company_tagline"}],N=[{href:"./index.html",text:"м. Київ, пр-т Лесі Українки, 26",white:!0},{href:"mailto:info@devstudio.com",text:"info@devstudio.com",white:!1},{href:"tel:+38-096-111-11-11",text:"+38 096 111 11 11",white:!1}],O=[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}],D=["Усі","Веб-сайти","Додатки","Дизайн","Маркетинг"],A=[{img:"./images/tehnohrak-mobile-1x.jpg",title:"Технохряк",type:"Веб-сайти"},{img:"./images/poster-mobile-1x.jpg",title:"Постер New Orlean vs Golden Star",type:"Дизайн"},{img:"./images/restaurant-mobile-1x.jpg",title:"Ресторан Seafood",type:"Додатки"},{img:"./images/prime-mobile-1x.jpg",title:"Проєкт Prime",type:"Маркетинг"},{img:"./images/boxes-mobile-1x.jpg",title:"Проєкт Boxes",type:"Додатки"},{img:"./images/inspiration-mobile-1x.jpg",title:"Inspiration has no Borders",type:"Веб-сайти"},{img:"./images/limited-mobile-1x.jpg",title:"Видання Limited Edition",type:"Дизайн"},{img:"./images/lab-mobile-1x.jpg",title:"Проєкт LAB",type:"Маркетинг"},{img:"./images/business-mobile-1x.jpg",title:"Growing Business",type:"Додатки"}],C="Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.";for(const{img:e,overlay:s}of x)console.log(`Service: ${s}, Image: ${e}`);const V=[{img:"./images/igor-mobile-1x.jpg",title:"Ігор Дем'яненко",description:"Product Designer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"./images/olga-mobile-1x.jpg",title:"Ольга Рєпіна",description:"Frontend Developer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"./images/mykola-mobile-1x.jpg",title:"Микола Тарасов",description:"Marketing",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"./images/mikhail-mobile-1x.jpg",title:"Михайло Єрмаков",description:"UI Designer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]}];function u(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="nav-list__nav-item">
                <a class="nav-list__nav-link ${i.active?"nav-list__nav-link--active-link":""}" href="${i.href}">${i.text}</a>
            </li>
        `).join("");t.innerHTML=o}function R(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="contacts-list__item">
                <a class="contacts-list__link" href="${i.href}">
                    <svg class="contacts-list__svg" width="${i.icon==="mail"?"16px":"10px"}" height="${i.icon==="mail"?"12px":"16px"}">
                        <use href="./images/symboldefs.svg#${i.icon}"></use>
                    </svg>
                    ${i.text}
                </a>
            </li>
        `).join("");t.innerHTML=o}function g(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="bnav-list__nav-item">
                <a class="bnav-list__nav-link ${i.active?"bnav-list__nav-link--active":""}" href="${i.href}">${i.text}</a>
            </li>
        `).join("");t.innerHTML=o}function W(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map((i,l)=>`
            <li class="bcontacts-list__contacts-item">
                <a class="bcontacts-list__link${l===0?"1":"2"}" href="${i.href}">${i.text}</a>
            </li>
        `).join("");t.innerHTML=o}function E(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="bsocial-list__social-item">
                <a class="bsocial-list__social-link" href="${i.href}">${i.text}</a>
            </li>
        `).join("");t.innerHTML=o}function G(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="our-features-list__item">
                <h3 class="our-features-list__title">${i.title}</h3>
                <p class="our-features-list__description">${i.description}</p>
            </li>
        `).join("");t.innerHTML=o}function K(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="what-we-do-list__item">
                <picture class="what-we-do-list__img">
                    <img src="${i.img}" alt="${i.overlay}">
                </picture>
                <h3 class="what-we-do-list__overlay">${i.overlay}</h3>
            </li>
        `).join("");t.innerHTML=o}function U(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="regular-customers-list__item">
                <a class="regular-customers-list__link" href="#">
                    <svg class="regular-customers-list__svg" width="${i.width}" height="${i.height}">
                        <use href="./images/symboldefs.svg#${i.icon}"></use>
                    </svg>
                </a>
            </li>
        `).join("");t.innerHTML=o}function z(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="address-list__item">
                <a class="address-list__link ${i.white?"address-list__link--white":""}" href="${i.href}">${i.text}</a>
            </li>
        `).join("");t.innerHTML=o}function J(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="join-us-list__item">
                <a class="join-us-list__link" href="${i.href}">
                    <svg class="join-us-list__svg" width="20px" height="20px">
                        <use href="./images/symboldefs.svg#${i.icon}"></use>
                    </svg>
                </a>
            </li>
        `).join("");t.innerHTML=o}function Q(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="team-list__item">
                <img class="team-list__img" src="${i.img}" alt="Фото ${i.title}">
                <h3 class="team-list__title">${i.title}</h3>
                <p class="team-list__description">${i.description}</p>
                <ul class="team-list__social-list">
                    ${i.social_links.map(l=>`
                        <li class="team-list__social-item">
                            <a class="team-list__social-link" href="${l.href}">
                                <svg class="team-list__social-svg" width="20px" height="20px">
                                    <use href="./images/symboldefs.svg#${l.icon}"></use>
                                </svg>
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </li>
        `).join("");t.innerHTML=o}function Y(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map((i,l)=>`
            <li class="list-first__item-first">
                <button class="list-first__button">${i}</button>
            </li>
        `).join("");t.innerHTML=o}function Z(e,s){const t=document.querySelector(e);if(!t)return;const o=s.map(i=>`
            <li class="list-second__item-second">
                <a href="#" class="list-second__item-link">
                    <div class="list-second__card-overlay-box">
                        <picture class="list-second__project-img">
                            <img src="${i.img}" alt="${i.title}">
                        </picture>
                        <p class="list-second__img-overlay">${C}</p>
                    </div>
                    <div class="list-second__card-text-box">
                        <p class="list-second__project-title">${i.title}</p>
                        <p class="list-second__project-description">${i.type}</p>
                    </div>
                </a>
            </li>
        `).join("");t.innerHTML=o}const m=document.querySelector(".portfolio__main")!==null;if(m){const e=d.map((t,o)=>({...t,active:o===1}));u(".nav-list",e);const s=f.map((t,o)=>({...t,active:o===1}));g(".bnav-list",s)}else u(".nav-list",d),g(".bnav-list",f);R(".contacts-list",P);W(".bcontacts-list",X);E(".bsocial-list",B);m||(G(".our-features-list",I),K(".what-we-do-list",x),Q(".team-list",V),U(".regular-customers-list",F));m&&(Y(".list-first",D),Z(".list-second",A));z(".address-list",N);J(".join-us-list",O);
