class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();
  const bannerImages = document.getElementById("banner-images");
let imageIndex = 0;

function rotateBanner() {
  imageIndex = (imageIndex + 1) % bannerImages.childElementCount;
  const translateXValue = -imageIndex * 100;
  bannerImages.style.transform = `translateX(${translateXValue}%)`;
}

setInterval(rotateBanner, 5000); // Trocar a imagem a cada 5 segundos
/*botão lua e sol*/
const chk = document.getElementById('chk');
const body = document.body;
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

chk.addEventListener('change', () => {
  body.classList.toggle('dark');
  header.classList.toggle('dark');
  footer.classList.toggle('dark');

  // Verifica se o modo escuro está ativado
  if (body.classList.contains('dark')) {
    // Aplica estilos para letras brancas
    body.style.color = '#fff';
    header.style.color = '#fff';
    footer.style.color = '#fff';
  } else {
    // Volta para estilos originais
    body.style.color = ''; // Define para vazio para remover a propriedade de estilo
    header.style.color = '';
    footer.style.color = '';
  }
});

