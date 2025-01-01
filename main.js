const data = [
  {
    title: "AngularJS",
    src: "./imgs/angularjs.svg"
  },
  {
    title: "Bash",
    src: "./imgs/bash.svg"
  },
  {
    title: "Bootstrap",
    src: "./imgs/bootstrap.svg"
  },
  {
    title: "Cordova",
    src: "./imgs/cordova.svg"
  },
  {
    title: "GitHub",
    src: "./imgs/github.svg"
  },
  {
    title: "C",
    src: "./imgs/language-c.svg"
  },
  {
    title: "C++",
    src: "./imgs/language-cpp.svg"
  },
  {
    title: "CSharp",
    src: "./imgs/language-csharp.svg"
  },
  {
    title: "CSS3",
    src: "./imgs/language-css3.svg"
  },
  {
    title: "Go",
    src: "./imgs/language-go.svg"
  },
  {
    title: "Haskell",
    src: "./imgs/language-haskell.svg"
  },
  {
    title: "HTML5",
    src: "./imgs/language-html5.svg"
  },
  {
    title: "Java",
    src: "./imgs/language-java.svg"
  },
  {
    title: "JavaScript",
    src: "./imgs/language-javascript.svg"
  },
  {
    title: "Lua",
    src: "./imgs/language-lua.svg"
  },
  {
    title: "PHP",
    src: "./imgs/language-php.svg"
  },
  {
    title: "Python",
    src: "./imgs/language-python.svg"
  },
  {
    title: "React",
    src: "./imgs/react.svg"
  },
  {
    title: "SASS",
    src: "./imgs/sass.svg"
  },
  {
    title: "VueJS",
    src: "./imgs/vuejs.svg"
  },
  {
    title: "XML",
    src: "./imgs/xml.svg"
  }
]

const itemsContainer = document.getElementById("items");
let elements = ``;
data.map((item) => {
    let element = `<div class="item"><img src="${item.src}" alt="${item.title}"><h1>${item.title}</h1></div>`;
    elements += element;
})
itemsContainer.innerHTML = `${elements}`;
itemsContainer.children[0].classList.add("current");

function main() {
  let currentEl = itemsContainer.getElementsByClassName("current")[0];
  let nextEl = currentEl.nextElementSibling;
  
  if (nextEl) {
    currentEl.classList.remove("current");
    nextEl.classList.add("current");
  }else{
    currentEl.classList.remove("current");
    itemsContainer.children[0].classList.add("current");
  }
}
setInterval(main, 2000)