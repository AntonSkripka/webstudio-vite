(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();//! Бєк-дроп з модальним вікном
const v=document.querySelector("[data-modal-open]"),x=document.querySelector("[data-modal]"),y=document.querySelector("[data-modal-close]"),m=document.querySelector("[modal-form]");if(m){let t=function(){x&&(x.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll"))};var Z=t;const l=m.querySelector("[modal-submit]"),i=m.querySelectorAll("[required]");v&&v.addEventListener("click",t),y&&y.addEventListener("click",t);const o=m.querySelector('input[name="tel"]'),e=m.querySelector('input[name="email"]'),a=/^\+\d{1,3}-\d{2,3}-\d{3}-\d{2}-\d{2}$/,d=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,f=(s,r)=>{let n=s;s.closest(".modal__input")?n=s.closest(".modal__input"):s.classList.contains("modal__textarea-comment")?n=s:s.type==="checkbox"&&(n=s.closest(".modal__label-comment")),h(s);const c=document.createElement("p");c.classList.add("error-message"),c.textContent=r,n&&n.after(c)},h=s=>{let r=s;s.closest(".modal__input")?r=s.closest(".modal__input"):s.type==="checkbox"?r=s.closest(".modal__label-comment"):s.classList.contains("modal__textarea-comment")&&(r=s);const n=r.nextElementSibling;n&&n.classList.contains("error-message")&&n.remove()},S=(s,r)=>{let n=null;s.closest(".modal__input")?n=s.closest(".modal__input"):s.classList.contains("modal__textarea-comment")&&(n=s),n&&(r?n.classList.add("is-valid"):n.classList.remove("is-valid"))},u=()=>{let s=!0;i.forEach(r=>{h(r);let n=!0;r.type!=="checkbox"&&r.value.trim()===""&&(n=!1,f(r,"Поле повинно бути заповнено.")),r.type==="checkbox"&&!r.checked&&(n=!1),r===o&&r.value.trim()!==""&&(a.test(r.value)||(n=!1,f(r,"Номер телефону некоректний. Формат: +XX-XXX-XXX-XX-XX."))),r===e&&r.value.trim()!==""&&(d.test(r.value)||(n=!1,f(r,"Адреса некорректна."))),S(r,n),n||(s=!1)}),l&&(l.disabled=!s)};u(),i.forEach(s=>{s.type==="checkbox"?s.addEventListener("change",u):s.addEventListener("input",u)}),m.addEventListener("submit",s=>{var r,n,c,_,p;s.preventDefault(),console.log((r=s.target.elements.name)==null?void 0:r.value),console.log((n=s.target.elements.tel)==null?void 0:n.value),console.log((c=s.target.elements.email)==null?void 0:c.value),console.log((_=s.target.elements.comment)==null?void 0:_.value),console.log((p=s.target.elements.checkbox)==null?void 0:p.value),s.target.reset()})}//! Burger
const q=document.querySelector("[data-burger-open]"),M=document.querySelector("[data-burger]"),T=document.querySelector("[data-burger-close]");q.addEventListener("click",j);T.addEventListener("click",j);function j(){M.classList.toggle("displaynone"),document.body.classList.toggle("no-scroll")}const b=[{href:"./index.html",text:"Студія",active:!0},{href:"./portfolio.html",text:"Портфоліо",active:!1},{href:"./index.html",text:"Контакти",active:!1}],L=[{href:"./index.html",text:"Студія",active:!0},{href:"./portfolio.html",text:"Портфоліо",active:!1},{href:"./index.html",text:"Контакти",active:!1}],H=[{href:"mailto:info@devstudio.com",icon:"mail",text:"info@devstudio.com"},{href:"tel:+38-096-111-11-11",icon:"smartphone",text:"+38 096 111 11 11"}],P=[{href:"tel:+38-096-111-11-11",text:"+38 096 111 11 11"},{href:"mailto:info@devstudio.com",text:"info@devstudio.com"}],X=[{href:"#",text:"Instagram"},{href:"#",text:"Twitter"},{href:"#",text:"Facebook"},{href:"#",text:"LinkedIn"}],B=[{img:"images/antenna.svg",title:"УВАГА ДО ДЕТАЛЕЙ",description:"Ідейні міркування, і навіть початок повсякденної роботи з формування позиції."},{img:"images/clock.svg",title:"ПУНКТУАЛЬНІСТЬ",description:"Завдання організації, особливо рамки і місце навчання кадрів тягне у себе."},{img:"images/diagram.svg",title:"ПЛАНУВАННЯ",description:"Так само консультація з широким активом значною мірою зумовлює."},{img:"images/astronaut.svg",title:"СУЧАСНІ ТЕХНОЛОГІЇ",description:"Значимість цих проблем настільки очевидна, що реалізація планових завдань."}],w=[{img:"images/programming-1x.jpg",overlay:"Десктопні додатки"},{img:"images/development-1x.jpg",overlay:"Мобільні додатки"},{img:"images/design-1x.jpg",overlay:"Дизайнерські рішення"}],I=[{width:"41px",height:"47px",icon:"yaco"},{width:"40px",height:"52px",icon:"tagline"},{width:"44px",height:"42px",icon:"company"},{width:"85px",height:"41px",icon:"foster_peters"},{width:"63px",height:"46px",icon:"brand"},{width:"94px",height:"44px",icon:"company_tagline"}],F=[{href:"./index.html",text:"м. Київ, пр-т Лесі Українки, 26",white:!0},{href:"mailto:info@devstudio.com",text:"info@devstudio.com",white:!1},{href:"tel:+38-096-111-11-11",text:"+38 096 111 11 11",white:!1}],N=[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}],O=["Усі","Веб-сайти","Додатки","Дизайн","Маркетинг"],D=[{img:"images/tehnohrak-mobile-1x.jpg",title:"Технохряк",type:"Веб-сайти"},{img:"images/poster-mobile-1x.jpg",title:"Постер New Orlean vs Golden Star",type:"Дизайн"},{img:"images/restaurant-mobile-1x.jpg",title:"Ресторан Seafood",type:"Додатки"},{img:"images/prime-mobile-1x.jpg",title:"Проєкт Prime",type:"Маркетинг"},{img:"images/boxes-mobile-1x.jpg",title:"Проєкт Boxes",type:"Додатки"},{img:"images/inspiration-mobile-1x.jpg",title:"Inspiration has no Borders",type:"Веб-сайти"},{img:"images/limited-mobile-1x.jpg",title:"Видання Limited Edition",type:"Дизайн"},{img:"images/lab-mobile-1x.jpg",title:"Проєкт LAB",type:"Маркетинг"},{img:"images/business-mobile-1x.jpg",title:"Growing Business",type:"Додатки"}],A="Ресурс пропонує комплексні пропозиції з різним рівнем функціоналу та сервісів. Все це дозволить відвідувачу отримати вичерпні відомості про компанію чи приватну особу.";for(const{img:l,overlay:i}of w)console.log(`Service: ${i}, Image: ${l}`);const C=[{img:"images/igor-mobile-1x.jpg",title:"Ігор Дем'яненко",description:"Product Designer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"images/olga-mobile-1x.jpg",title:"Ольга Рєпіна",description:"Frontend Developer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"images/mykola-mobile-1x.jpg",title:"Микола Тарасов",description:"Marketing",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]},{img:"images/mikhail-mobile-1x.jpg",title:"Михайло Єрмаков",description:"UI Designer",social_links:[{href:"#",icon:"instagram"},{href:"#",icon:"twitter"},{href:"#",icon:"facebook"},{href:"#",icon:"linkedin"}]}];function k(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="nav-list__nav-item">
                <a class="nav-list__nav-link ${e.active?"nav-list__nav-link--active-link":""}" href="${e.href}">${e.text}</a>
            </li>
        `).join("");t.innerHTML=o}function V(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="contacts-list__item">
                <a class="contacts-list__link" href="${e.href}">
                    <svg class="contacts-list__svg" width="${e.icon==="mail"?"16px":"10px"}" height="${e.icon==="mail"?"12px":"16px"}">
                        <use href="images/symboldefs.svg#${e.icon}"></use>
                    </svg>
                    ${e.text}
                </a>
            </li>
        `).join("");t.innerHTML=o}function $(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="bnav-list__nav-item">
                <a class="bnav-list__nav-link ${e.active?"bnav-list__nav-link--active":""}" href="${e.href}">${e.text}</a>
            </li>
        `).join("");t.innerHTML=o}function R(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map((e,a)=>`
            <li class="bcontacts-list__contacts-item">
                <a class="bcontacts-list__link${a===0?"1":"2"}" href="${e.href}">${e.text}</a>
            </li>
        `).join("");t.innerHTML=o}function W(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="bsocial-list__social-item">
                <a class="bsocial-list__social-link" href="${e.href}">${e.text}</a>
            </li>
        `).join("");t.innerHTML=o}function E(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="our-features-list__item">
                <h3 class="our-features-list__title">${e.title}</h3>
                <p class="our-features-list__description">${e.description}</p>
            </li>
        `).join("");t.innerHTML=o}function G(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="what-we-do-list__item">
                <picture class="what-we-do-list__img">
                    <img src="${e.img}" alt="${e.overlay}">
                </picture>
                <h3 class="what-we-do-list__overlay">${e.overlay}</h3>
            </li>
        `).join("");t.innerHTML=o}function K(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="regular-customers-list__item">
                <a class="regular-customers-list__link" href="#">
                    <svg class="regular-customers-list__svg" width="${e.width}" height="${e.height}">
                        <use href="images/symboldefs.svg#${e.icon}"></use>
                    </svg>
                </a>
            </li>
        `).join("");t.innerHTML=o}function U(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="address-list__item">
                <a class="address-list__link ${e.white?"address-list__link--white":""}" href="${e.href}">${e.text}</a>
            </li>
        `).join("");t.innerHTML=o}function z(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="join-us-list__item">
                <a class="join-us-list__link" href="${e.href}">
                    <svg class="join-us-list__svg" width="20px" height="20px">
                        <use href="images/symboldefs.svg#${e.icon}"></use>
                    </svg>
                </a>
            </li>
        `).join("");t.innerHTML=o}function J(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="team-list__item">
                <img class="team-list__img" src="${e.img}" alt="Фото ${e.title}">
                <h3 class="team-list__title">${e.title}</h3>
                <p class="team-list__description">${e.description}</p>
                <ul class="team-list__social-list">
                    ${e.social_links.map(a=>`
                        <li class="team-list__social-item">
                            <a class="team-list__social-link" href="${a.href}">
                                <svg class="team-list__social-svg" width="20px" height="20px">
                                    <use href="images/symboldefs.svg#${a.icon}"></use>
                                </svg>
                            </a>
                        </li>
                    `).join("")}
                </ul>
            </li>
        `).join("");t.innerHTML=o}function Q(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map((e,a)=>`
            <li class="list-first__item-first">
                <button class="list-first__button">${e}</button>
            </li>
        `).join("");t.innerHTML=o}function Y(l,i){const t=document.querySelector(l);if(!t)return;const o=i.map(e=>`
            <li class="list-second__item-second">
                <a href="#" class="list-second__item-link">
                    <div class="list-second__card-overlay-box">
                        <picture class="list-second__project-img">
                            <img src="${e.img}" alt="${e.title}">
                        </picture>
                        <p class="list-second__img-overlay">${A}</p>
                    </div>
                    <div class="list-second__card-text-box">
                        <p class="list-second__project-title">${e.title}</p>
                        <p class="list-second__project-description">${e.type}</p>
                    </div>
                </a>
            </li>
        `).join("");t.innerHTML=o}const g=document.querySelector(".portfolio__main")!==null;if(g){const l=b.map((t,o)=>({...t,active:o===1}));k(".nav-list",l);const i=L.map((t,o)=>({...t,active:o===1}));$(".bnav-list",i)}else k(".nav-list",b),$(".bnav-list",L);V(".contacts-list",H);R(".bcontacts-list",P);W(".bsocial-list",X);g||(E(".our-features-list",B),G(".what-we-do-list",w),J(".team-list",C),K(".regular-customers-list",I));g&&(Q(".list-first",O),Y(".list-second",D));U(".address-list",F);z(".join-us-list",N);
