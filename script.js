$(document).ready(function () {
  function labelSeats() {
    let rows = $(".seats");
    rows;
    let totalSeatsPerRow = 10;
    let seatLetter = "A";

    rows.each(function () {
      let row = $(this);
      row.append("<br>");

      for (let i = 1; i <= totalSeatsPerRow; i++) {
        let seatLabel = seatLetter + i;
        row.append(`<button class="container">S ${seatLabel}</button>`);
      }
      seatLetter = String.fromCharCode(seatLetter.charCodeAt(0) + 1);
    });
  }

  labelSeats();

  $("#firstrow").draggable();
  $("#secondrow").draggable();
  $("#thirdrow").draggable();

  $("#stage").on("click", function () {
    $("#stage").animate({ right: "150px" });
  });
});