const items = document.querySelectorAll(".menu-item");

items.forEach(item => {
  item.addEventListener('click', function() {

    let active = this.classList.contains("is-active");
    items.forEach(el => el.classList.remove('is-active'));
    
    if(active){
      this.classList.remove("is-active");
    } else {
      this.classList.add("is-active");    
    }
  })
});