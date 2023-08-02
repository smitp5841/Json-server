


let userdata = (e) => {
    e.preventDefault();
    let user = {
        image: document.getElementById("img").value,
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        brand: document.getElementById("brand").value,
    }

    fetch(" http://localhost:3000/Mobile", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user),
   
})

}

document.querySelector("form").addEventListener("submit", userdata)



let get = async () => {
    let res = await fetch("http://localhost:3000/Mobile");
    let data = await res.json();
    display(data);
};
get();

const display = (data) => {

    data.map((ele) => {
        let img = document.createElement('img');
        img.src = ele.img;
        let name = document.createElement("h3");
        name.innerHTML = ele.name;
        let price = document.createElement("h5");
        price.innerHTML = ele.price;
        let brand = document.createElement("h5");
        brand.innerHTML = ele.brand;
        let div = document.createElement("div");
        div.append(img, name, price, brand);
        document.getElementById("ui").append(div);
    })

}

