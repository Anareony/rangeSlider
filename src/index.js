function star(links) {
   for (var i = 0; i < links.length; i++) {
      links[i].onclick = function() {
         alert(i);
      }
   }
}

star(0);
