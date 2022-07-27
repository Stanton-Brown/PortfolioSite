
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the backgroun color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

function sendEmail(name, email, subject, message){
  var params = {
    name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_3tu703y", "template_os5s4di", params).then(function(res){
    alert("Success!" + res.status);
  })

}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();