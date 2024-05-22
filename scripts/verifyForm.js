export default function verifyForm() {
  const nameSurname = document.getElementById("name-surname").value;
  const pickupPlace = document.getElementById("pickup-place").value;
  const pickupDay = document.getElementById("day").value;
  const paymentMethod = document.querySelector('input[name="payment"]:checked');
  const errorString = document.querySelector(".error");

  if (!nameSurname) {
    errorString.classList.remove("hide");
    errorString.textContent = "Please enter your name and surname.";
    document.getElementById("name-surname").focus();
    return false;
  }

  const nameSurnameWords = nameSurname.trim().split(" ");
  if (nameSurnameWords.length !== 2) {
    errorString.classList.remove("hide");
    errorString.textContent =
      "Please enter both name and surname separated by a space.";
    document.getElementById("name-surname").focus();
    return false;
  }

  if (!pickupPlace) {
    errorString.classList.remove("hide");
    errorString.textContent = "Please choose a pick-up place.";
    document.getElementById("pickup-place").focus();
    return false;
  }

  if (!pickupDay) {
    errorString.classList.remove("hide");
    errorString.textContent =
      "Please choose a pick-up day no later than two weeks from today.";
    document.getElementById("day").focus();
    return false;
  }

  if (!paymentMethod) {
    errorString.classList.remove("hide");
    errorString.textContent = "Please choose a payment method.";
    document.getElementById("leasing").focus();
    return false;
  }

  errorString.classList.add("hide");
  return true;
}
