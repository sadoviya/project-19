(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-add-open]"),
        closeModalBtn: document.querySelector("[data-modal-add-close]"),
        modal: document.querySelector("[data-modal-add]"),
        body: document.querySelector('body'),
        // menuList: document.querySelector('.modal-list'),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
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