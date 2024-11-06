  // Regular expression to match valid US phone number formats
    const validUSPhoneNumber = /^(1\s?)?(\(\d{3}\)|\d{3})(\s|-)?\d{3}(\s|-)?\d{4}$/;

    document.getElementById("check-btn").addEventListener("click", () => {
      const userInput = document.getElementById("user-input").value.trim();
      const resultsDiv = document.getElementById("results-div");

      // Check if the input is empty
      if (!userInput) {
        alert("Please provide a phone number");
        return;
      }

      // Validate the input against the phone number regex
      if (validUSPhoneNumber.test(userInput)) {
        resultsDiv.textContent = `Valid US number: ${userInput}`;
      } else {
        resultsDiv.textContent = `Invalid US number: ${userInput}`;
      }
    });

    // Clear button functionality
    document.getElementById("clear-btn").addEventListener("click", () => {
      document.getElementById("results-div").textContent = "";
      document.getElementById("user-input").value = "";
    });
