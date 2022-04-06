

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
