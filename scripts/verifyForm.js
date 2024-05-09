export default function verifyForm() {
  const nameSurname = document.getElementById("name-surname").value;
  const pickupPlace = document.getElementById("pickup-place").value;
  const pickupDay = document.getElementById("day").value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  const errorString = document.querySelector(".error");

  if (!nameSurname || !pickupPlace || !pickupDay || !paymentMethod) {
    errorString.classList.remove("hide");
    errorString.textContent = "Please fill out all the required fields.";
    return false;
  }

  const nameSurnameWords = nameSurname.trim().split(" ");
  if (nameSurnameWords.length !== 2) {
    errorString.classList.remove("hide");
    errorString.textContent =
      "Please enter both name and surname separated by a space.";
    return false;
  }

  return true;
}
