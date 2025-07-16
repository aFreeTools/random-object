const objects = ['Lighthouse', 'Punching bag', 'Chaps', 'Shower cap', 'Cauldron', 'Eggnog', ll", "Belt", "Binoculars"];
    let generatedObjects = [];

    const objectCountInput = document.getElementById("objectCount");
    const generateBtn = document.getElementById("generateBtn");
    const resetBtn = document.getElementById("resetBtn");
    const outputDiv = document.getElementById("output");
    const errorDiv = document.getElementById("error");

    const showError = (message) => {
      errorDiv.textContent = message;
    };

    const clearError = () => {
      errorDiv.textContent = "";
    };

    const displayOutput = () => {
      outputDiv.innerHTML = "";
      generatedObjects.forEach((item) => {
        const span = document.createElement("span");
        span.textContent = item;
        outputDiv.appendChild(span);
      });
    };

    const generateRandomObjects = (count) => {
      const tempSet = new Set();

      while (tempSet.size < count && tempSet.size < objects.length) {
        const randomIndex = Math.floor(Math.random() * objects.length);
        tempSet.add(objects[randomIndex]);
      }

      return Array.from(tempSet);
    };

    generateBtn.addEventListener("click", () => {
      const count = parseInt(objectCountInput.value, 10);

      if (isNaN(count) || count < 1 || count > objects.length) {
        showError(`Please enter a number between 1 and ${objects.length}.`);
        return;
      }

      clearError();
      generatedObjects = generateRandomObjects(count);
      displayOutput();
    });

    resetBtn.addEventListener("click", () => {
      generatedObjects = [];
      objectCountInput.value = "";
      outputDiv.innerHTML = "";
      clearError();
    });
