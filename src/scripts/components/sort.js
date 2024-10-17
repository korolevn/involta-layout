const ACTIVE_SORT_BTN = "sort__btn_active";
const sortButtons = Array.from(document.querySelectorAll(".sort__btn"));

sortButtons?.map((button) => {
    button.addEventListener("click", () => {
        sortButtons.map((btn) => btn.classList.remove(ACTIVE_SORT_BTN));
        button.classList.add(ACTIVE_SORT_BTN);
    });
});
