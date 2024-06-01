document.addEventListener("DOMContentLoaded", function() {
    const sec1=document.querySelector("#sec1");
    const sec2=document.querySelector("#sec2");
    const sec3=document.querySelector("#sec3");
  

      sec1.addEventListener("click", function(){
        const content = this.nextElementSibling;

        //hiding other content
        sec2.nextElementSibling.style.display="none"
        sec3.nextElementSibling.style.display="none"
  
        // Toggle the display of the content
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });

      sec2.addEventListener("click", function(){
    
        const content = this.nextElementSibling;

        //hiding other content
        sec1.nextElementSibling.style.display="none"
        sec3.nextElementSibling.style.display="none"
  
        // Toggle the display of the content
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });

      sec3.addEventListener("click", function(){
       
        const content = this.nextElementSibling;
        //hiding other content
        sec2.nextElementSibling.style.display="none"
        sec1.nextElementSibling.style.display="none"
  
        // Toggle the display of the content
        if (content.style.display === "none") {
          content.style.display = "block";
        } else {
          content.style.display = "none";
        }
      });

  });
