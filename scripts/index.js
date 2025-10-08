const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

console.log(initialCards);
/*----------------------------------------------------------------------------------- */
/*                                  Eletents                                          */
/*----------------------------------------------------------------------------------- */
const profileEditButton = document.querySelector("#profile__edit-button");
const profileEditModal = document.querySelector("#profile-edit-modal");
const profileEditclosebutton = document.querySelector(
  "#profile-edit-close-button"
);
const profiletitle = document.querySelector(".profile__title");
const profiledescription = document.querySelector(".profile__description");
const profiletitelinput = document.querySelector("#profile-title-input");
const profiledescriptioninput = document.querySelector(
  "#profile-description-input"
);

const profileEditform = profileEditModal.querySelector(".modal__form");

/*----------------------------------------------------------------------------------- */
/*                                  Function                                          */
/*----------------------------------------------------------------------------------- */

function closepopup() {
  profileEditModal.classList.remove("modal_opened");
}

/*----------------------------------------------------------------------------------- */
/*                                  Event Handlers                                    */
/*----------------------------------------------------------------------------------- */
function handleProfileEditSubmit(e) {
  e.preventDefault();
  profiletitle.textContent = profiletitelinput.value;
  profiledescription.textContent = profiledescriptioninput.value;
  closepopup();
}
/*----------------------------------------------------------------------------------- */
/*                                  EventListener                                     */
/*----------------------------------------------------------------------------------- */

profileEditButton.addEventListener("click", () => {
  profiletitelinput.value = profiletitle.textContent;
  profiledescriptioninput.value = profiledescription.textContent;

  profileEditModal.classList.add("modal_opened");
});

profileEditclosebutton.addEventListener("click", closepopup);

profileEditform.addEventListener("submit", handleProfileEditSubmit);
