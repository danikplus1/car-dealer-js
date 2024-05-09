export default function localStorageUpdate() {
  function saveInputValues() {
    const nameSurname = document.getElementById("name-surname").value;
    const pickupPlace = document.getElementById("pickup-place").value;
    const pickupDay = document.getElementById("day").value;
    const paymentMethod = document.querySelector(
      'input[name="payment"]:checked'
    ).value;

    let formData = {
      nameSurname,
      pickupPlace,
      pickupDay,
      paymentMethod,
    };
    localStorage.setItem("formData", JSON.stringify(formData));
  }

  function loadInputValues() {
    const loadedData = localStorage.getItem("formData");
    const formData = loadedData ? JSON.parse(loadedData) : {};

    const nameSurname = formData.nameSurname || "";
    const pickupPlace = formData.pickupPlace || "";
    const pickupDay = formData.pickupDay || "";
    const paymentMethod = formData.paymentMethod || "";

    document.getElementById("name-surname").value = nameSurname;
    document.getElementById("pickup-place").value = pickupPlace;
    document.getElementById("day").value = pickupDay;

    if (paymentMethod === "leasing") {
      document.getElementById("leasing").checked = true;
    } else if (paymentMethod === "cash") {
      document.getElementById("cash").checked = true;
    }
  }

  document.querySelectorAll("input, select").forEach((input) => {
    input.addEventListener("change", saveInputValues);
  });

  window.addEventListener("DOMContentLoaded", loadInputValues);
}
