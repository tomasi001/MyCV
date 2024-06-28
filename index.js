document.addEventListener("DOMContentLoaded", function () {
  // Function to update the href
  function updateHref() {
    var screenWidth = window.innerWidth;
    var link = document.getElementById("dynamicLink");

    if (screenWidth <= 900) {
      // Example: for screens smaller than or equal to 900px
      link.setAttribute("href", "#contactMobile");
    } else {
      link.setAttribute("href", "#contact");
    }
  }

  // Call the function initially
  updateHref();
  console.log("Initial call to updateHref function");

  // Add event listener for window resize
  window.addEventListener("resize", updateHref);
});
