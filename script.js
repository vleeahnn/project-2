
function toggleIcon() {
    $(".icon").on("click", function () {
      $(".icon").toggleClass("active")
      $(".menu-mobile").slideToggle(300)
    })
  }
  
  function closeMobileMenu() {
    $(".menu-mobile").on("click", "a", function () {
      $(".icon").trigger("click")
    })
  }
  //when the page loads call toggleIcon;
  $(toggleIcon)
  $(closeMobileMenu)
  $(desktopMenu) 
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }