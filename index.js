let btn1=document.getElementById("btn1");

function click1(){
  btn1.style.backgroundColor="#32de84";
  btn1.style.color="white";
  btn1.style.fontFamily="Bree Serif";
  btn1.style.borderColor="#d0b200";
  btn1.textContent="Enrollment Successfull"
}

let btn2=document.getElementById("btn2");

function click2(){
  btn2.style.backgroundColor="#32de84";
  btn2.style.color="white";
  btn2.style.fontFamily="Bree Serif";
  btn2.style.borderColor="#d0b200";
  btn2.textContent="Enrollment Successfull"
}

let btn3=document.getElementById("btn3");

function click3(){
  btn3.style.backgroundColor="#32de84";
  btn3.style.color="white";
  btn3.style.fontFamily="Bree Serif";
  btn3.style.borderColor="#d0b200";
  btn3.textContent="Enrollment Successfull"
}

/*Reviews-section*/

let selectedRating = 0;

function setRating(rating) {
    selectedRating = rating;
    updateRatingDisplay();
}

function updateRatingDisplay() {
    const ratingDisplay = document.getElementById('rating');
    ratingDisplay.innerText = selectedRating;
}

function submitReview() {
    const name = document.getElementById('name').value;
    const review = document.getElementById('review').value;
   
    if (name && review && selectedRating > 0) {
        const reviewSection = document.querySelector('.reviews');
       
        const newReview = document.createElement('div');
        newReview.classList.add('review');
       
        newReview.innerHTML = `
            <h2>${name}</h2>
            <p>${review}</p>
            <div class="rating">
                ${getRatingStars(selectedRating)}
            </div>
        `;
       
        reviewSection.appendChild(newReview);
       
        // Clear input fields
        document.getElementById('name').value = '';
        document.getElementById('review').value = '';
       
        // Reset rating
        selectedRating = 0;
        updateRatingDisplay();
    } else {
        alert('Please fill in all fields and select a rating.');
    }
}

function getRatingStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span class="star">&#9733;</span>';
        } else {
            stars += '<span class="star">&#9734;</span>';
        }
    }
    return stars;
}
