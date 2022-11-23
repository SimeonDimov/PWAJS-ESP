//sidebar toggle
var sidebarOpen = false;

function openSidebar() {
  var sidebar = document.getElementById("sidebar");

  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}
