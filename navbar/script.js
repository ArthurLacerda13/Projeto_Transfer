function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const conteudo = document.querySelector('.conteudo');
    
    sidebar.classList.add('show');
    conteudo.classList.add('shift');
   }
   
   function fecharSidebar() {
    const sidebar = document.getElementById('sidebar');
    const conteudo = document.querySelector('.conteudo');
    
    sidebar.classList.remove('show');
    conteudo.classList.remove('shift');
   }