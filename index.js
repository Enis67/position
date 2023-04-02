const shareMobile = document.getElementsByClassName("share-wrapper")[0];
const bottomContainer = document.getElementsByClassName("bottom-container")[0];
const bottomAcvitiyContainer = document.getElementsByClassName(
  "bottom-container-activity"
)[0];
const shareActivity = document.getElementById("share-activity-wrapper");

console.log(shareActivity);

console.log(bottomAcvitiyContainer);

shareMobile.addEventListener("click", () => {
  if (bottomContainer.classList.contains("remove")) {
    bottomContainer.classList.remove("remove");
  } else {
    bottomContainer.classList.add("remove");
  }
  if (bottomAcvitiyContainer.classList.contains("remove")) {
    bottomAcvitiyContainer.classList.remove("remove");
  } else {
    bottomAcvitiyContainer.classList.add("remove");
  }
});

shareActivity.addEventListener("click", () => {
  if (bottomContainer.classList.contains("remove")) {
    bottomContainer.classList.remove("remove");
  } else {
    bottomContainer.classList.add("remove");
  }
  if (bottomAcvitiyContainer.classList.contains("remove")) {
    bottomAcvitiyContainer.classList.remove("remove");
  } else {
    bottomAcvitiyContainer.classList.add("remove");
  }
});
