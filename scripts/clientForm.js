export default function clientForm() {
  const $clientForm = document.createElement("form");
  $clientForm.classList.add("client-form");

  // Cash or Leasing
  const $leasing = document.createElement("input");
  $leasing.setAttribute("type", "radio");
  $leasing.setAttribute("id", "leasing");
  $leasing.setAttribute("name", "payment");
  $leasing.setAttribute("value", "Leasing");

  const $leasingLabel = document.createElement("label");
  $leasingLabel.setAttribute("for", "leasing");
  $leasingLabel.textContent = "Leasing";

  const $cash = document.createElement("input");
  $cash.setAttribute("type", "radio");
  $cash.setAttribute("id", "cash");
  $cash.setAttribute("name", "payment");
  $cash.setAttribute("value", "Cash");

  const $labelCash = document.createElement("label");
  $labelCash.setAttribute("for", "cash");
  $labelCash.textContent = "Cash";

  // Name, Place, Day
  const $name = document.createElement("input");
  $name.setAttribute("type", "text");
  $name.setAttribute("id", "name");
  $name.setAttribute("name", "name");

  const $labelName = document.createElement("label");
  $labelName.setAttribute("for", "name");
  $labelName.textContent = "Name & Surname";

  const $place = document.createElement("input");
  $place.setAttribute("type", "text");
  $place.setAttribute("id", "place");
  $place.setAttribute("name", "place");

  const $labelPlace = document.createElement("label");
  $labelPlace.setAttribute("for", "place");
  $labelPlace.textContent = "Pick-up place";

  const $day = document.createElement("input");
  $day.setAttribute("type", "date");
  $day.setAttribute("id", "day");
  $day.setAttribute("name", "day");

  const today = new Date();

  const twoWeeksFromToday = new Date(today);
  twoWeeksFromToday.setDate(today.getDate() + 14);

  // Format the dates as YYYY-MM-DD (required format for input type="date")
  const formattedToday = today.toISOString().split("T")[0];
  const formattedTwoWeeksFromToday = twoWeeksFromToday
    .toISOString()
    .split("T")[0];

  $day.setAttribute("min", formattedToday);
  $day.setAttribute("max", formattedTwoWeeksFromToday);

  const $labelDay = document.createElement("label");
  $labelDay.setAttribute("for", "day");
  $labelDay.textContent = "Pick-up day";

  $clientForm.append(
    $leasing,
    $leasingLabel,
    $cash,
    $labelCash,
    $labelName,
    $name,
    $labelPlace,
    $place,
    $labelDay,
    $day
  );
  return $clientForm;
}
