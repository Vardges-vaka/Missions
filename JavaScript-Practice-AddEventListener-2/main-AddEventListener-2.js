let submitBtn = document.getElementById("printBtn");
let firstNameInput = document.getElementById("firstNameInput");
let LastNameInput = document.getElementById("lastNameInput");
let description = document.getElementById("largeInput");

submitBtn.addEventListener("click", function () {
  // Remove any existing popup container
  let existingPopup = document.querySelector(".popup-container");
  if (existingPopup) {
    existingPopup.remove();
  }

  // Creating the new popup container
  let popupContainer = document.createElement("div");
  popupContainer.classList = "popup-container";

  let nameContainer = document.createElement("div");
  nameContainer.classList = "name-container";
  let label = document.createElement("p");
  label.classList = "label";
  label.textContent = "Full Name";
  nameContainer.appendChild(label);
  let info = document.createElement("p");
  info.classList = "info";
  info.textContent = firstNameInput.value + " " + LastNameInput.value;
  nameContainer.appendChild(info);

  let descriptionContainer = document.createElement("div");
  descriptionContainer.classList = "description-container";
  let descriptionLabel = document.createElement("p");
  descriptionLabel.classList = "label";
  descriptionLabel.textContent = "Description";
  descriptionContainer.appendChild(descriptionLabel);
  let descriptionInfo = document.createElement("p");
  descriptionInfo.classList = "info";
  descriptionInfo.textContent = description.value;
  descriptionContainer.appendChild(descriptionInfo);

  popupContainer.appendChild(nameContainer);
  popupContainer.appendChild(descriptionContainer);
  document.body.appendChild(popupContainer);
});
