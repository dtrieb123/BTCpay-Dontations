

// Sort array by id in asc/desc order

posts.sort((b, a) => parseFloat(a.id) - parseFloat(b.id));

// Create the template literal

const markup = `
<ul>
    ${posts.map(post => 
            `<a style="cursor: crosshair;"href="${post.url}">

            <li>
              <div class="heading">
                  <h1>${post.title}</h1>
               <span class="date">
                  ${post.date}
                </span>
              </div>
             <center>
             <img style="width:50%" src=${post.image}>
             </center>
                <p>${post.desc}</p>
             </li>
             <hr></hr>
              </a>`
     ).join('')}
 </ul>
`;

// Insert the template literal into the DOM

blog.innerHTML = markup

// COPY BUTTONS START
var copy_text_val = document.querySelector('.copy_text');

function Copy() {
  copy_text_val.select();
  document.execCommand("copy");
  console.log(copy_text_val.value);
} 

var copy_text_val2 = document.querySelector('.copy_text2');

function Copy2() {
  copy_text_val2.select();
  document.execCommand("copy");
  console.log(copy_text_val.value);
} 

var copy_text_val3 = document.querySelector('.copy_text3');

function Copy3() {
  copy_text_val3.select();
  document.execCommand("copy");
  console.log(copy_text_val.value);
} 
// COPY BUTTONS END
