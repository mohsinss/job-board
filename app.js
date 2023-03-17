

// Function to generate the HTML for a single job listing

function createJobListingHTML(job) {
    return `
      <li>
        <h3>${job.title}</h3>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p>${job.description}</p>
      </li>
    `;
  }
  
  // Function to display the filtered job listings
  function displayFilteredJobs(filteredJobs) {
    const jobListings = document.querySelector('.job-listings ul');
    jobListings.innerHTML = '';
  
    filteredJobs.forEach(job => {
      jobListings.innerHTML += createJobListingHTML(job);
    });
  }
  
  // Function to filter job listings based on keywords and location
  function filterJobs(featuredJobs, keywords, location) {
    return featuredJobs.filter(job => {
      const titleMatch = job.title.toLowerCase().includes(keywords.toLowerCase());
      const locationMatch = job.location.toLowerCase().includes(location.toLowerCase());
      return titleMatch && locationMatch;
    });
  }
  
  // Function to handle the job search form submission
  function handleJobSearch(event, featuredJobs) {
    event.preventDefault();
  
    const keywordsInput = document.querySelector('#keywords');
    const locationInput = document.querySelector('#location');
  
    const filteredJobs = filterJobs(featuredJobs, keywordsInput.value, locationInput.value);
    displayFilteredJobs(filteredJobs);
  }
  
  // Function to fetch job listings from the JSON file and populate the HTML
  async function populateFeaturedJobs() {
    try {
      const response = await fetch('jobListings.json');
      const featuredJobs = await response.json();
  
      displayFilteredJobs(featuredJobs);
  
      const searchForm = document.querySelector('.job-search form');
      searchForm.addEventListener('submit', (event) => handleJobSearch(event, featuredJobs));
    } catch (error) {
      console.error('Error fetching job listings:', error);
    }
  }
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

  // Populate the job listings when the page loads
  document.addEventListener('DOMContentLoaded', populateFeaturedJobs);
  