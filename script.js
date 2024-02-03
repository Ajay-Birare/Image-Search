let key = "-jQNgR4hFH5zS95OyoKWohDG7SV9Ut2TXo6Tv23vVys";

// <https://api.unsplash.com/photos>

const serchBox = document.getElementById("serchBOx");
const serchForm = document.getElementById("serchForm");

const serchRes = document.getElementById("serchRes");
const desc = document.querySelector(".desc");

// let keyword = "";
let page = 1;

async function serchImages() {
  serchRes.innerHTML = "";

  if (serchBox.value == "") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }
  let imgName = serchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${imgName}&client_id=${key}`;

  const respo = await fetch(url);
  const data = await respo.json();

  const res = data.results;
  if (res.length == 0) {
    alert("no Images Found");
  }

  res.map((res) => {
    const image = document.createElement("img");
    image.src = res.urls.small;

    // when we click to see the image below---
    // const imgLink = document.createElement("a");
    // imgLink.href = res.links.html;
    // imgLink.target = "_blank";
    // imgLink.appendChild(image);

    serchRes.appendChild(image);
  });

  console.log(data);
}

serchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  serchImages();
});

// checking-----------------------
// let keyword = "animal";
// const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}`;

// const p = fetch(url);

// p.then((data) => {
//   console.log(data);
//   return data.json();
// }).then((d) => {
//   console.log(d);

//   let temp = d.results;
//   console.log(temp);

//   temp.forEach((data) => {
//     const img = document.createElement("img");
//     img.src = data.urls.small;
//     serchRes.appendChild(img);
//     // console.log(data.urls.small);
//   });
// });
