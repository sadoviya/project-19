(() => {
    const refs = {
        openModalBtn1: document.querySelector("[data-modal-add-open]"),
        closeModalBtn1: document.querySelector("[data-modal-add-close]"),
        modal: document.querySelector("[data-modal-add]"),
        body: document.querySelector('body'),
        // menuList: document.querySelector('.modal-list'),
    };

    refs.openModalBtn1.addEventListener("click", toggleModal);
    refs.closeModalBtn1.addEventListener("click", toggleModal);
    // refs.menuList.addEventListener('click', removeModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        refs.body.classList.toggle('no-scroll');
    }
    function removeModal() {
        // refs.menu.classList.add('is-hidden');
        refs.body.classList.remove('no-scroll');
    }
})();