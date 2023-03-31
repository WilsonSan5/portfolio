$(function loadNavbar(){
  $("#nav-placeholder").load("navbar-footer/navbar.html");
});


$(function loadFooter(){
    $("#footer-placeholder").load("navbar-footer/footer.html");
  });

  // Fonction native appelée grace à la librairie jquery

  // Il faut appeler ce script dans le html et placer une div avec comme id = nav-placeholder