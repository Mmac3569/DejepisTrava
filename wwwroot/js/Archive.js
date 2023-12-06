
    var coll = document.getElementsByName("archive");
    var cont = document.getElementsByName("archive-content-opened");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].classList.add("archive");
    coll[i].addEventListener("click", function() {
        this.classList.toggle("archive-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
            } else {
        content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
    for (i = 0; i < cont.length; i++) {
        cont[i].style.maxHeight = cont[i].scrollHeight + "px";
    }