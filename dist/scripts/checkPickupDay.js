export default function checkPickupDay() {
  const $day = document.getElementById("day");

  const today = new Date();
  const twoWeeksFromToday = new Date(today);
  twoWeeksFromToday.setDate(today.getDate() + 14);

  // Format the dates as YYYY-MM-DD (required format for input type="date")
  const formattedToday = today.toISOString().split("T")[0];
  const formattedTwoWeeksFromToday = twoWeeksFromToday.toISOString().split("T")[0];

  $day.setAttribute("min", formattedToday);
  $day.setAttribute("max", formattedTwoWeeksFromToday);

  function validateDateInput(event) {
    const selectedDate = new Date(event.target.value);

    if (selectedDate < today) {
      event.target.value = formattedToday;
    } else if (selectedDate > twoWeeksFromToday) {
      event.target.value = formattedTwoWeeksFromToday;
    }
  }

  $day.addEventListener("change", validateDateInput);
  $day.addEventListener("input", validateDateInput);
}
