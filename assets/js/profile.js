// initialize data
document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("edit-name");
    const emailInput = document.getElementById("edit-email");
    const profileForm = document.getElementById("profile-form");
    const editProfileBtn = document.getElementById("edit-profile-btn");

    const storedName = localStorage.getItem("registeredUsername") || "Default User";
    const storedEmail = localStorage.getItem("registeredEmail") || "user@example.com";
    // const storedAvatar = localStorage.getItem("profileAvatar") || "person.png";

    // values for name, email

    document.getElementById("profile-name-display").textContent = storedName;
    document.getElementById("profile-email-display").textContent = storedEmail;
    // document.getElementById("profile-avatar").src = storedAvatar;

    nameInput.value = storedName;
    emailInput.value = storedEmail;

    
    profileForm.classList.add("hidden");

    // "Edit Profile" 
    editProfileBtn.addEventListener("click", () => {
        profileForm.classList.remove("hidden");
        editProfileBtn.classList.add("hidden"); 
    });
});

// Save Profile Updates
document.getElementById("save-profile").addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("edit-name").value.trim();
    const email = document.getElementById("edit-email").value.trim();

    if (name && email) {
        // Update localStorage
        localStorage.setItem("registeredUsername", name);
        localStorage.setItem("registeredEmail", email);

        // Update displayed profile
        document.getElementById("profile-name-display").textContent = name;
        document.getElementById("profile-email-display").textContent = email;

        // "Edit Profile" button
        document.getElementById("profile-form").classList.add("hidden");
        document.getElementById("edit-profile-btn").classList.remove("hidden");

        //  confirmation popup
        alert("Your profile has been updated successfully!");
    } else {
        alert("Both name and email are required.");
    }
});

// Avatar Upload
document.getElementById("avatar-upload").addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            const avatarUrl = reader.result;

            // Update avatar 
            document.getElementById("profile-avatar").src = avatarUrl;
            localStorage.setItem("profileAvatar", avatarUrl);

            alert("Avatar updated successfully!");
        };
        reader.readAsDataURL(file);
    }
});


// add delete button

document.addEventListener('DOMContentLoaded', () => {
    const favoriteMoviesList = document.getElementById('favorite-movies');
    const addMovieButton = document.getElementById('add-movie');

    // Add Movie 
    addMovieButton.addEventListener('click', () => {
        const movieName = prompt('Enter the movie name:');
        if (movieName) {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
            listItem.innerHTML = `
                ${movieName}
                <button class="btn btn-danger btn-sm delete-movie">Delete</button>
            `;
            favoriteMoviesList.appendChild(listItem);

            // Delete movie 
            listItem.querySelector('.delete-movie').addEventListener('click', () => {
                listItem.remove();
            });
        }
    });

     
    favoriteMoviesList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-movie')) {
            const listItem = event.target.closest('li');
            listItem.remove();
        }
    });
});
