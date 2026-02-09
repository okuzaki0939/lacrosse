// ハンバーガーメニュー開閉
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".js-header");
  const button = document.querySelector(".js-hamburgerMenu");
  const buttonText = document.querySelector(".js-hamburgerMenu__buttonText");
  const menu = document.querySelector(".js-hamburgerMenu__content");
  const focusTrap = document.querySelector(".js-focus-trap");
  const body = document.body;
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;

    header.classList.toggle("is-open", isMenuOpen);
    button.classList.toggle("is-open", isMenuOpen);
    buttonText.classList.toggle("is-active", isMenuOpen);
    menu.classList.toggle("is-active", isMenuOpen);
    body.classList.toggle("is-fixed", isMenuOpen);
    button.setAttribute("aria-expanded", isMenuOpen.toString());
    buttonText.setAttribute("aria-label", isMenuOpen ? "メニューを閉じる" : "メニューを開く");
  };

  if (menu) {
    const menuLinks = menu.querySelectorAll(".js-hamburgerMenu__link");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMenuOpen) {
          toggleMenu();
        }
      });
    });
  }

  const handleKeydown = (e) => {
    if (e.key === "Escape" && isMenuOpen) {
      toggleMenu();
    }
  };

  if (button) {
    button.addEventListener("click", toggleMenu);
  }
  document.addEventListener("keydown", handleKeydown);

  focusTrap.addEventListener("focus", (e) => {
    button.focus();
  });
});

// MV
document.addEventListener( 'DOMContentLoaded', () => {
  const mvCarousel = '#mv-carousel';
  const options = {
    type: 'fade',
    autoplay: true,
    rewind: true,
    interval: 4000,
    speed: 1000,
    arrows: false,
    pagination: false,
  }
  const splide = new Splide(mvCarousel, options);
  
  splide.mount();
});

// モーダル
document.addEventListener('DOMContentLoaded', () => {
  const modalButtons = document.querySelectorAll('.js-modalButton');
  const closeButtons = document.querySelectorAll('.js-modal__closeButton');

  // 開く処理
  modalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const targetId = button.getAttribute('href').replace('#', '');
      const modal = document.getElementById(targetId);

      if (modal) {
        modal.showModal();
      }
    });
  });

  // 閉じる処理
  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.js-modal');
      if (modal) {
        const iframe = modal.querySelector('iframe');
        if (iframe) {
          const src = iframe.src;
          iframe.src = src; 
        }
        
        modal.close();
      }
    });
  });

  const modals = document.querySelectorAll('.js-modal');
  modals.forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.close();
      }
    });
  });
});