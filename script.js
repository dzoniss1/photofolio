function openNav() {
  document.getElementById("myNav").style.width = "100%";
  var barsIcon = document.querySelector('.fa-bars');
  barsIcon.style.display = 'none';
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
  var barsIcon = document.querySelector('.fa-bars');
  barsIcon.style.display = 'block';
}