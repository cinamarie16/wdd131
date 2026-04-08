document.addEventListener('DOMContentLoaded', function () {
    const year = document.querySelector("#currentyear");

    function currentyear() {
        year.innerHTML = new Date().getFullYear();
    };
    currentyear();
});

document.getElementById("lastModified").innerHTML = `Last Modified: <span> ${document.lastModified}</span>`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Orem Utah",
        location: "Orem, Utah, United States",
        dedicated: "2024, January, 21",
        area: 71998,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/071079264cd111eeb455eeeeac1eb5a4c7edde59/full/640%2C/0/default"
    },
    {
        templeName: "Seattle Washington",
        location: "Bellevue, Washington, United States",
        dedicated: "1980, November, 17",
        area: 110000,
        imageUrl:
            "https://www.churchofjesuschrist.org/imgs/02bc5fa239bfc78d3fdc3da6d851d95c65d054d3/full/640%2C/0/default"
    },
    {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana, United States",
        dedicated: "2000, July, 16",
        area: 10890,
        imageUrl:
            "https://churchofjesuschrist.org/imgs/a75beca22300a3263bd47fba03b5b0d1b5ca0753/full/640%2C/0/default"
    },
];

function createTempleCard(temple) {
    return `
    <div class="card">
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" class="card-img" width=400 height=250>
        <div class="temple-info">
            <h2>${temple.templeName}</h2>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Size: ${temple.area} sq ft</p>
        </div>
    </div>
    `;
}

document.addEventListener("DOMContentLoaded", () => {
    const templeCard = document.getElementById("container");
    templeCard.innerHTML = temples.map(createTempleCard).join("");
})

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    // const dedicated = temples.map((temple) => temple.dedicated);
    // let year = dedicated.slice(0, 4);
    // const yearNumber = Number(year);
    let oldTemples = temples.filter(temple => parseInt(temple.dedicated) < 1900);
    const templeCard = document.getElementById("container");
    templeCard.innerHTML = oldTemples.map(createTempleCard).join("");
});

const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    let newTemples = temples.filter(temple => parseInt(temple.dedicated) > 2000);
    const templeCard = document.getElementById("container");
    templeCard.innerHTML = newTemples.map(createTempleCard).join("");
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    let largeTemples = temples.filter(temple => temple.area > 90000);
    const templeCard = document.getElementById("container");
    templeCard.innerHTML = largeTemples.map(createTempleCard).join("");
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    let smallTemples = temples.filter(temple => temple.area < 10000);
    const templeCard = document.getElementById("container");
    templeCard.innerHTML = smallTemples.map(createTempleCard).join("");
});