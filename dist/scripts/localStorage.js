export default function localStorageUpdate() {
  function saveInputValues() {
    const nameSurname = document.getElementById("name-surname").value;
    const pickupPlace = document.getElementById("pickup-place").value;
    const pickupDay = document.getElementById("day").value;
    const paymentMethod =
      document.querySelector('input[name="payment"]:checked')?.value || "";

    let formData = {
      nameSurname: nameSurname,
      pickupPlace: pickupPlace,
      pickupDay: pickupDay,
      paymentMethod: paymentMethod,
    };

    localStorage.setItem("formData", JSON.stringify(formData));
  }

  function loadInputValues() {
    const loadedData = localStorage.getItem("formData");
    const formData = loadedData ? JSON.parse(loadedData) : {};

    document.getElementById("name-surname").value = formData.nameSurname || "";
    document.getElementById("pickup-place").value = formData.pickupPlace || "";
    document.getElementById("day").value = formData.pickupDay || "";

    const paymentMethod = formData.paymentMethod || "";
    if (paymentMethod === "leasing") {
      document.getElementById("leasing").checked = true;
    } else if (paymentMethod === "cash") {
      document.getElementById("cash").checked = true;
    }
  }

  document.querySelectorAll("input, select").forEach((input) => {
    if (
      input.type === "text" ||
      input.type === "date" ||
      input.tagName === "SELECT"
    ) {
      input.addEventListener("input", saveInputValues);
    }
    input.addEventListener("change", saveInputValues);
  });

  window.addEventListener("DOMContentLoaded", loadInputValues);
}
