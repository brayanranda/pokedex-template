const url = "data.json";
fetch(url)
.then(response => response.json())
.then(data => {
    let info = document.getElementById("info");
    data.info.map(obj => {
        info.innerHTML += `
        <li class="s_li">
            <p class="s_li--p">${obj.title}</p>
            <p class="s_li--p">${obj.description}</p>
        </li>
        `;
    });

    let poke = document.getElementById("poke");
    data.data.map(obj2 => {
        poke.innerHTML += `
        <div class="f__poke-img">
            <img class="f__poke-img--img" src=${obj2.url}>
        </div> 
        `;
    });
})
.catch(err=>console.log(err))

