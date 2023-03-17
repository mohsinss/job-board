document.addEventListener('DOMContentLoaded', fetchJobListings);

const apiUrl = 'http://localhost:3000/joblistings';

async function fetchJobListings() {
  try {
    const response = await fetch(apiUrl);
    const jobListings = await response.json();
    displayJobListings(jobListings);
  } catch (error) {
    console.error(error);
  }
}

function displayJobListings(jobListings) {
  // ... rest of the code
}
