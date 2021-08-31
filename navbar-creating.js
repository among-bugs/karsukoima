
const classes = {
    navigation: [
        'navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light'
    ],
    container: 'container',
    brand: [
        'navbar-brand'
    ],
    toggler: [
        'navbar-toggler'
    ],
    togglerIcon: 'navbar-toggler-icon',
    navbarCollapse: [
        'collapse',
        'navbar-collapse'
    ],
    ul: 'navbar-nav',
    li: 'nav-link',
    form: 'd-flex',
    input: [
        'form-control', 'me-2'
    ],
    button: [
        'btn', 'btn-primary'
    ]
}

const fontAwesomeIcons = [
    'fa-home', 
    'fa-caret-square-down', 
    'fa-newspaper', 
    'fa-images', 
    'fa-phone'
    //'fa-arrow-alt-circle-right'
]

const tags = {
    navigation: document.createElement('nav'),
    container: document.createElement('div'),
    navbarBrand: document.createElement('a'),
    togglerButton: document.createElement('button'),
    togglerSpan: document.createElement('span'),
    collapse: document.createElement('div'),
    // ulist: document.createElement('ul'),
    // li: document.createElement('li'),
    form: document.createElement('form'),
    input: document.createElement('input'),
    button: document.createElement('button')
}

//класс аркылы стиль береміз
classes.navigation.forEach((item) => {
    tags.navigation.classList.add(item)
    
});

tags.container.classList.add(classes.container);
// tags.container.style = 'background: #5CA4EA;';

classes.brand.forEach(item => {
    tags.navbarBrand.classList.add(item)
});
tags.navbarBrand.href = 'index.html';

//мында сайттын брэнды 
tags.navbarBrand.textContent = 'Қарағанды Су қойма';
tags.navbarBrand.style = `
    color: dodgerblue;
    margin-top: -5px`;

classes.toggler.forEach(item => {
    tags.togglerButton.classList.add(item)
});

tags.togglerButton.type = 'button';

tags.togglerSpan.classList.add(classes.togglerIcon);

classes.navbarCollapse.forEach(item => {
    tags.collapse.classList.add(item);
});


// tags.ulist.classList.add(classes.ul);
// tags.li.classList.add(classes.li);

tags.form.classList.add(classes.form);

classes.input.forEach( item => {
    tags.input.classList.add(item);
})

tags.button.classList.add(classes.button);

classes.button.forEach( item => {
    tags.button.classList.add(item)
})

tags.button.innerHTML =
`Іздеу`;

tags.button.style = `
background-color: dodgerblue;
`;

//атрибуттар орнатамыз
function settingAttributes(to, name, value) {
    to.setAttribute(name, value);
}

settingAttributes(tags.togglerButton, 'data-bs-toggle', 'collapse');
settingAttributes(tags.togglerButton, 'data-bs-target', '#navbarSupportedContent');
settingAttributes(tags.togglerButton, 'aria-controls', 'navbarSupportedContent');
settingAttributes(tags.togglerButton, 'aria-expanded', 'false');
settingAttributes(tags.togglerButton, 'aria-label', 'Toggle navigation');
settingAttributes(tags.collapse, 'id', 'navbarSupportedContent');
settingAttributes(tags.input, 'type', 'search');
settingAttributes(tags.input, 'placeholder', 'Сайттан іздеу');
settingAttributes(tags.input, 'aria-label', 'Search');
settingAttributes(tags.button, 'type', 'submit');

tags.button.style = `font-size: 16px; font-family: Arial`


console.log(tags.button.innerHTML)
document.getElementById('navbar-here').prepend(tags.navigation);

tags.navigation.prepend(tags.container);

tags.container.prepend(tags.navbarBrand);

tags.container.append(tags.togglerButton);

tags.togglerButton.prepend(tags.togglerSpan);

tags.togglerButton.after(tags.collapse);

tags.form.append(tags.input);

tags.form.append(tags.button);

let navLists = '';

function settingNavigationLists() {
    document.querySelector(`.${classes.navbarCollapse}`).innerHTML =
        `<div class="container" id="navigation-container">
            <div class="row">
                <div class="col-8">
                    <ul class="${classes.ul} mr-auto"></ul>
                </div>
                <!--<div class="col-2-auto"> </div>-->
                <div class="col-auto">
                        ${tags.form.outerHTML}
                </div>
            </div>
        </div>
        `;
    for (let indx = 0; indx < navigations.length; indx++) {
        document.querySelector(`.${classes.ul}`).innerHTML +=
        `<li class="nav-item">
            <a class="nav-link" style="font-family: 'Arial'; font-size: 16px; margin: 0px 10px 2px 10px;"
                href="${navigations[indx].link}">
               <!--
                <div class="container">
                    <div class="row"> 
                        <div class="col" style="vertical-align: middle">
                            <i class="fas ${fontAwesomeIcons[indx]}"></i>
                        </div>
                        <div class="col-2"
                        style="margin: 0px; -40px 0px -40px"></div>
                        <div class="col-8"
                            style="margin-left: -40px;">  
                        </div>
                    </div>
                </div>
                -->
                ${navigations[indx].name}
            </a>
        </li>`
        const selectedLink = document.querySelectorAll('.nav-link');
        selectedLink.type = 'button';
    }
}

settingNavigationLists();



