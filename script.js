  // Define section globally or set it appropriately
  let section = 'dashboard';

  function toggleSidebar() {
    const container = document.querySelector(".container");
    container.classList.toggle("sidebar-open");

    const menuToggle = document.querySelector(".menu-toggle");
    const closeToggle = document.querySelector(".close-toggle");

    if (container.classList.contains("sidebar-open")) {
      menuToggle.style.display = "none";
      closeToggle.style.display = "block";
    } else {
      menuToggle.style.display = "block";
      closeToggle.style.display = "none";
    }
  }


  function showContent(section) {
    const contentElement = document.getElementById("content");
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          contentElement.innerHTML = xhr.responseText;

          // Active Page
          const listItems = document.querySelectorAll(".sidebar li");
          listItems.forEach((item) => item.classList.remove("active"));

          const activeListItem = document.querySelector(
            `.sidebar li[data-section="${section}"]`
          );
          if (activeListItem) {
            activeListItem.classList.add("active");
          }
        } else {
          contentElement.innerHTML = "Error loading content.";
        }
      }
    };

    xhr.open("GET", "src/" + section + ".html", true);
    xhr.send();
  }

  // Initial active page setup
  showContent(section);


  // Attandeance here

  function markAttendance(course) {
    const courseElement = document.querySelector(`[data-course="${course}"]`);
    const attendanceButton = courseElement.querySelector('button');

    courseElement.classList.toggle('attended');
    attendanceButton.disabled = true;
    attendanceButton.innerText = 'Attendance Marked';
}