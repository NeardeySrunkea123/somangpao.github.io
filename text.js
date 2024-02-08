const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Event listener for "Yes" button
function yesBtnClickHandler() {
    question.innerHTML = " ABA link or ABA QR?? <br><a href='https://pay.ababank.com/65fbcuejuAo3RT1F7' target='_blank'><span style='font-size: 25px;'>click this link for somnang laor</span></a>"; // ABA link added
    gif.src = "photo_2024-02-08_16-42-04.jpg";
    gif.style.maxWidth = "300px"; // Adjust size as needed
    noBtn.style.display = "none"; // Hide the noBtn when yesBtn is clicked
    yesBtn.innerHTML = "Done"; // Change the text of the yesBtn to Done
    
    yesBtn.removeEventListener("click", yesBtnClickHandler); // Remove previous event listener
    yesBtn.addEventListener("click", doneBtnClickHandler); // Add event listener for the Done button
}


function doneBtnClickHandler() {
    question.innerHTML = "Xie Xie ni";
    gif.src = "https://i.pinimg.com/originals/5d/b6/3f/5db63fd9e802e7c882f88dddbdc6026b.gif";
    gif.style.maxWidth = "100%"; // Adjust size as needed
    gif.style.height = "auto"; // Ensure aspect ratio is maintained
    
    // Change the text of the button back to default
    yesBtn.innerHTML = "Go back";

    // Reset button style
    yesBtn.removeAttribute("style");

    // Center the button text horizontally and vertically
    const textWidth = yesBtn.getBoundingClientRect().width;
    const padding = 50; // Adjust padding as needed
    const buttonWidth = textWidth + padding * 2; // Padding on both sides
    yesBtn.style.width = buttonWidth + "px";
    yesBtn.style.left = `calc(50% - ${buttonWidth / 2}px)`;

    // Remove event listener for Done button
    yesBtn.removeEventListener("click", doneBtnClickHandler);
    // Add event listener for the initial button behavior
    yesBtn.addEventListener("click", yesBtnClickHandler);
}


// Initial event listener for "Yes" button
yesBtn.addEventListener("click", yesBtnClickHandler);

// Event listener for "No" button
noBtn.addEventListener('mouseover', () => {
    const noBtnRect = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRect.width;
    const maxY = window.innerHeight - noBtnRect.height; // Corrected spelling from innerHight to innerHeight

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
