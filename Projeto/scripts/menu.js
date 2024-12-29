// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     sidebar.classList.add('show', 'botao-fechar');

// }
   
// function toggleSidebar() {
//     const sidebar = document.getElementById('sidebar');
//     sidebar.classList.remove('show');
// }

const sidebar = document.getElementById('sidebar');
const menuToggle = document.getElementById('botao_sidebar');
let sidebarOpen = false;

menuToggle.addEventListener('click', () => {
    sidebarOpen = !sidebarOpen
    if (sidebarOpen){
        sidebar.classList.add('open');
        menuToggle.classList.add('botao-fechar')
        menuToggle.classList.remove('botao-fechar2')
    } else{
        sidebar.classList.remove('open')
        menuToggle.classList.remove('botao-fechar')
        menuToggle.classList.add('botao-fechar2')
    }
});
document.addEventListener('click', (event) => {
    if (isSidebarOpen && !event.target.closest('#sidebar')) {
      closeSidebar();
    }
});