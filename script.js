const container = document.querySelector(".container");
const seats = document.querySelectorAll(".rwo .seat:not(.occupied)");
// querySelectorAll -> array
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;
// const ticketPrice1 = parseInt(movieSelect.value);
// console.log(typeof ticketPrice);

//function
//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  console.log(selectedSeats);
  const selectedSeatsCount = selectedSeats.length;
  console.log(selectedSeatsCount);

  //copy selected seats into arr
  const seatsIndex = [...selectedSeatsCount];
  //map through array

  //return a new array indexes

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

//movie select event
movieSelect.addEventListener("change", (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//seat click event
container.addEventListener("click", (e) => {
  //console.log(e.target); element that clicked on
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    // console.log(e.target);
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
