
    var coll = document.getElementsByName("collapsible");
    var cont = document.getElementsByName("opened");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].classList.add("collapsible");
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
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