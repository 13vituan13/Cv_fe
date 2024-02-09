// *** Open SideBar Menu ***
// Get DOM elements by sidebar IDs
const sidebar = document.getElementById('navbar');
const navbar_sidebar = document.getElementById('navbar-sidebar');

// Function to handle hover effect on the menu
const hoverMenu = (toggleId, navbarId, bodyId, mode) => {
    // Get DOM elements by their IDs
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId);

    if (toggle && navbar) {
        // Get all elements with class 'nav__text'
        const navText = document.querySelectorAll('.nav__text');

        // Check the sidebar status stored in localStorage
        const isSidebarOpen = localStorage.getItem('sidebarOpen') === 'true';
        if (!isSidebarOpen) {

            // If the sidebar mode is open
            if (mode == "open") {
                // Add classes to display the menu
                navbar.classList.add('show');
                navbar_sidebar.classList.add('sidebar_scroll');
                toggle.classList.add('rotate');
                setTimeout(() => {
                    toggle.classList.add('nav__toggle_pad--hover');
                }, 100);

                // Show text content on the menu
                navText.forEach(textElement => {
                    textElement.classList.remove('d-none');
                });
            }

            // If the sidebar mode is close
            if (mode == "close") {
                // Remove classes to close the menu
                navbar.classList.remove('show');
                navbar_sidebar.classList.remove('sidebar_scroll');
                toggle.classList.remove('rotate');
                toggle.classList.remove('nav__toggle_pad--hover');

                // Hide text content on the menu
                navText.forEach(textElement => {
                    textElement.classList.add('d-none');
                });
            }
        }
    }
};

// Function to handle menu display
const showMenu = (toggleId, navbarId, bodyId) => {
    // Get DOM elements by their IDs
    const toggle = document.getElementById(toggleId),
        navbar = document.getElementById(navbarId),
        bodypadding = document.getElementById(bodyId);

    if (toggle && navbar) {
        // Get all elements with class 'nav__text'
        const navText = document.querySelectorAll('.nav__text');

        // Check the sidebar status stored in localStorage
        const isSidebarOpen = localStorage.getItem('sidebarOpen') === 'true';

        // Set default sidebar
        if (isSidebarOpen) {
            // Add classes to display the menu in its default state
            navbar.classList.add('show');
            navbar_sidebar.classList.add('sidebar_scroll');
            toggle.classList.add('rotate');
            toggle.classList.add('nav__toggle_pad');
            bodypadding.classList.add('expander');

            // Show text content on the menu
            navText.forEach(textElement => {
                textElement.classList.remove('d-none');
            });
        }

        document.getElementById('navbar').classList.remove('d-none')

        // Listen for a click event on the toggle to open or close the menu
        toggle.addEventListener('click', () => {
            // Reverse the sidebar status and save it in localStorage
            const isCurrentlyOpen = navbar.classList.contains('show');
            localStorage.setItem('sidebarOpen', !isCurrentlyOpen);

            navbar.classList.toggle('show');
            navbar_sidebar.classList.toggle('sidebar_scroll');
            toggle.classList.toggle('rotate');
            toggle.classList.toggle('nav__toggle_pad');
            bodypadding.classList.toggle('expander');

            let timeDelay = !isCurrentlyOpen ? 300 : 0;
            setTimeout(() => {
                navText.forEach(textElement => {
                    textElement.classList.toggle('d-none');
                });
            }, timeDelay);
        });
    }
};

// Call the function to show the menu
showMenu('nav-toggle', 'navbar', 'main')

// Handle hover effect on the menu
const hoverDelay = 150;
let hoverTimer;
navbar.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
        hoverMenu('nav-toggle', 'navbar', 'main', 'open');
    }, hoverDelay);
});

navbar.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimer);
    hoverTimer = setTimeout(() => {
        hoverMenu('nav-toggle', 'navbar', 'main', 'close');
    }, hoverDelay);
});

// Handle the click event on menu links, add color and active class
const linkColor = document.querySelectorAll('.nav__link')

// Define the `colorLink` function that will be called when a link is clicked
function colorLink() {
    // Remove the 'active' class from all menu links
    linkColor.forEach(l => l.classList.remove('active'))

    // Add the 'active' class to the clicked link, highlighting it as the active link
    this.classList.add('active')
}

// Add a click event listener to each link in the `linkColor` NodeList
linkColor.forEach(l => l.addEventListener('click', colorLink));
// *** Close SideBar Menu ***