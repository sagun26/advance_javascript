const profileContainer = document.getElementById("profile");
const generateBtn = document.getElementById("generateBtn");

async function fetchUser() {
    try {
        const response = await fetch("https://randomuser.me/api/");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const user = data.results[0];
        displayUser(user);
    } catch (error) {
        console.error(error);
        profileContainer.textContent = "Something went wrong!";
    }
}

function displayUser(user) {
    profileContainer.innerHTML = `
        <img src="${user.picture.large}" alt="User Picture" width="150" height="150">
        <h2>${user.name.first} ${user.name.last}</h2>
        <p>Email: ${user.email}</p>
        <p>Location: ${user.location.city}, ${user.location.country}</p>
    `;
}


fetchUser();

// Generate new user on button click
generateBtn.addEventListener("click", fetchUser);