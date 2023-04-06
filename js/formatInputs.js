day.addEventListener("click", () => {
  if (month.value !== "") {
    month.value = String(month.value).padStart(2, "0");
  }
});

month.addEventListener("click", () => {
  if (day.value !== "") {
    day.value = String(day.value).padStart(2, "0");
  }
});

year.addEventListener("click", () => {
  if (day.value !== "") {
    day.value = String(day.value).padStart(2, "0");
  }

  if (month.value !== "") {
    month.value = String(month.value).padStart(2, "0");
  }
});

// From https://stackoverflow.com/questions/469357/html-text-input-allow-only-numeric-input

// Restricts input for the given textbox to the given inputFilter function.
function setInputFilter(textbox, inputFilter, errMsg) {
    [
      "input",
      "keydown",
      "keyup",
      "mousedown",
      "mouseup",
      "select",
      "contextmenu",
      "drop",
      "focusout",
    ].forEach(function (event) {
      textbox.addEventListener(event, function (e) {
        if (inputFilter(this.value)) {
          // Accepted value.
          if (["keydown", "mousedown", "focusout"].indexOf(e.type) >= 0) {
            this.classList.remove("input-error");
            this.setCustomValidity("");
          }
  
          this.oldValue = this.value;
          this.oldSelectionStart = this.selectionStart;
          this.oldSelectionEnd = this.selectionEnd;
        } else if (this.hasOwnProperty("oldValue")) {
          // Rejected value: restore the previous one.
          this.classList.add("input-error");
          this.setCustomValidity(errMsg);
          this.reportValidity();
          this.value = this.oldValue;
          this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
        } else {
          // Rejected value: nothing to restore.
          this.value = "";
        }
      });
    });
  }
  
  setInputFilter(
    day,
    function (value) {
      return /^\d*$/.test(value);
    },
    "Only digits are allowed"
  );
  
  setInputFilter(
    month,
    function (value) {
      return /^\d*$/.test(value);
    },
    "Only digits are allowed"
  );
  
  setInputFilter(
    year,
    function (value) {
      return /^\d*$/.test(value);
    },
    "Only digits are allowed"
  );