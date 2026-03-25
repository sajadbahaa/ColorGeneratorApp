// Color Generator App 


// color resources data 
colors = [
 
"#FF5733"
,
"#33FF57"
,
"#3357FF"
,
"#F1C40F"
,
"#8E44AD"
,
"#1ABC9C"
,
"#E74C3C"
,
"#2ECC71"
,
"#3498DB"
,
"#9B59B6"
,
"#34495E"
,
"#16A085"
,
"#27AE60"
,
"#2980B9"
,
"#D35400"
,
"#C0392B"
,
"#7F8C8D"
,
"#BDC3C7"
,
"#ECF0F1"
,
"#2C3E50"
,
"#F39C12"
,
"#E67E22"
,
"#95A5A6"
,
"#DFFF00"
,
"#FFBF00"
,
"#FF7F50"
,
"#DE3163"
,
"#40E0D0"
,
"#6495ED",
"#CCCCFF"
]

// console.log(colors);

const UI =
{
colors:document.getElementById("colors"),
generate:document.getElementById('generate')
}

function UploadColors()
{
UI.colors.innerHTML = "";
const max  = 4;
for(let i = 0;i<max;i++)
    {
        const randomIndex = Math.floor( Math.random() * colors.length) ;
        const color  = colors[randomIndex];
    // create item
    const item = document.createElement("div");
    item.classList.add("item","flex");

     // color box
    const itemColor = document.createElement("div");
    itemColor.classList.add("itemColor");
    itemColor.style.backgroundColor = color;

    // color detials
    const details = document.createElement("div");
    details.classList.add("itemDetials" ,"flex");
    const span = document.createElement("span");
    span.textContent = `${color}`;

// button copy

const button = document.createElement("button");
    button.className = "Btn";
    button.dataset.color = color;
    button.innerHTML = `<span class="svgIcon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
    </span>`;

    details.append(span);
    details.append(button);
item.append(itemColor);
item.append(details);

UI.colors.append(item);
    }

    CopyEvent();
}

function CopyEvent()
{
UI.colors.addEventListener(("click"),(e)=>
    {
const btn =  e.target.closest(".Btn");
if (!btn)
    return;
const color = btn.dataset.color;

// code copy ctr+c 
navigator.clipboard.writeText(color);

// feed back
btn.innerHTML = "Copied!";

setTimeout(() => {
        btn.innerHTML =  `<span class="svgIcon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
    </span>`;

    }, 1000 );

    })
}

UI.generate.addEventListener(("click"),()=>
    {
UploadColors();
    }
);

UploadColors();