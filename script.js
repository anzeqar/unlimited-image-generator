var container = document.querySelector("#image-container");
const submit = document.querySelector("#submit");
const search = document.querySelector("#search");
var images = "";
var spinner = `<div class="col">
<div class="card h-100 border-0">
<img
src="./img/spinner.gif"
alt="..."
class='card-img-top'
/>
</div>
</div>`;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  images = "";
  container.innerHTML = "";
  if (search.value == "") {
    container.innerHTML = `
    <div class='w-100'>
        <p class='text-light bg-danger text-center p-2 rounded'>Please Enter Value to Search</p>
    </div>
`;
    setTimeout(() => {
      container.innerHTML = "";
    }, 2000);
  } else {
    clearInterval();
    setInterval(() => {
      fetch(`https://source.unsplash.com/1600x900/?${search.value}`).then(
        (res) => {
          images += `<div class="col">
                    <div class="card h-100 border-0">
                    <a href="${res.url}
                      " class="link" target='_blank' download><img
                      src="${res.url}
                  
                    "
                      class="card-img-top"
                      alt="..."
                    /></a>
                    
                    
                </div>
                
                </div>
                `;
        }
      );
      container.innerHTML = images + spinner;
      window.scrollTo(0, document.body.scrollHeight);
    }, 2000);
  }
});
