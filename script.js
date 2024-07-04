document.getElementById("check-btn").addEventListener("click", function () {
  const inputText = document.getElementById("text-input").value.trim();

  if (inputText === "") {
    alert("Please input a value");
    return;
  }

  const processedText = inputText.replace(/[\W_]/g, "").toLowerCase();
  const reversedText = processedText.split("").reverse().join("");

  if (processedText === reversedText) {
    document.getElementById(
      "result"
    ).textContent = `${inputText} is a palindrome`;
  } else {
    document.getElementById(
      "result"
    ).textContent = `${inputText} is not a palindrome`;
  }
});
