// GitHub User Lookup Application
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('githubForm');
    
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault(); // Prevent default form submission
            
            const username = document.getElementById('username').value.trim();
            
            if (!username) {
                alert('Please enter a GitHub username');
                return;
            }
            
            // Remove @ symbol if user included it
            const cleanUsername = username.replace('@', '');
            
            try {
                // Show loading state
                const submitButton = form.querySelector('button[type="submit"]');
                const originalText = submitButton.textContent;
                submitButton.textContent = 'Loading...';
                submitButton.disabled = true;
                
                // Fetch user data from GitHub API
                const response = await fetch(`https://api.github.com/users/${cleanUsername}`);
                
                if (!response.ok) {
                    if (response.status === 404) {
                        throw new Error('User not found');
                    } else {
                        throw new Error('Failed to fetch user data');
                    }
                }
                
                const userData = await response.json();
                
                // Store user data in localStorage
                localStorage.setItem('githubUser', JSON.stringify(userData));
                
                // Show transition animation
                showPageTransition();
                
                // Redirect to second.html after transition
                setTimeout(() => {
                    window.location.href = 'second.html';
                }, 1500);
                
            } catch (error) {
                alert(`Error: ${error.message}`);
                
                // Reset button state
                const submitButton = form.querySelector('button[type="submit"]');
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
    
    // If we're on second.html, populate the user data
    if (window.location.pathname.includes('second.html')) {
        hidePageTransition();
        populateUserData();
    }
});

// Show page transition
function showPageTransition() {
    const transition = document.getElementById('pageTransition');
    if (transition) {
        transition.classList.add('active');
    }
}

// Hide page transition with delay
function hidePageTransition() {
    const transition = document.getElementById('pageTransition');
    if (transition) {
        setTimeout(() => {
            transition.classList.remove('active');
        }, 500);
    }
}

function populateUserData() {
    const userData = localStorage.getItem('githubUser');
    
    if (!userData) {
        alert('No user data found. Please go back and search for a user.');
        window.location.href = 'index.html';
        return;
    }
    
    const user = JSON.parse(userData);
    
    // Update profile image
    const profileImg = document.querySelector('.profile img');
    if (profileImg) {
        profileImg.src = user.avatar_url;
        profileImg.alt = `${user.login}'s avatar`;
    }
    
    // Update username
    const nameElement = document.querySelector('.name-text');
    if (nameElement) {
        nameElement.textContent = user.name || user.login;
    }
    
    // Update bio
    const bioElement = document.querySelector('.bio-text');
    if (bioElement) {
        bioElement.innerHTML = user.bio ? `<em>${user.bio}</em>` : '<em>Bio not available</em>';
    }
    
    // Update repository count
    const repoCountElement = document.querySelector('.repo-count');
    if (repoCountElement) {
        repoCountElement.textContent = user.public_repos;
    }
    
    // Update followers count
    const followersCountElement = document.querySelector('.followers-count');
    if (followersCountElement) {
        followersCountElement.textContent = user.followers;
    }
    
    // Update following count
    const followingCountElement = document.querySelector('.following-count');
    if (followingCountElement) {
        followingCountElement.textContent = user.following;
    }
    
    // Update location
    const locationElement = document.querySelector('.location-text');
    if (locationElement) {
        locationElement.textContent = user.location || 'Location not available';
    }
    
    // Update join date
    const dateElement = document.querySelector('.date');
    if (dateElement) {
        const joinDate = new Date(user.created_at);
        const formattedDate = joinDate.toLocaleDateString('en-GB'); // DD/MM/YYYY format
        dateElement.textContent = formattedDate;
    }
}