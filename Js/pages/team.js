// Data Array for Team Members
// This array contains details about each team member, including their name, role, image, and description.
const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: "/imgs/team3.jpg", // Path to the image of the team member
    description:
      "John is the visionary behind our success. With over 20 years of experience, he leads with passion and integrity.",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    image: "/imgs/team2.jpg",
    description:
      "Jane oversees all technology initiatives and ensures our systems are cutting-edge and secure.",
  },
  {
    name: "Michael Brown",
    role: "Lead Designer",
    image: "/imgs/1team.jpg",
    description:
      "Michael's creativity knows no bounds. He designs user-friendly interfaces that captivate our clients.",
  },
  {
    name: "Toni Kross",
    role: "Marketing Manager",
    image: "/imgs/team4.jpg",
    description:
      "Toni crafts campaigns that resonate with our audience, driving engagement and growth.",
  },
];

// Function to Render Team Members
// This function dynamically creates HTML elements to display team members on the page.
function renderTeam() {
  const teamContainer = document.getElementById("teamContainer"); // Get the container where team cards will be added

  // Iterate through the `teamMembers` array
  teamMembers.forEach((member) => {
    // Create a card for each team member
    const card = document.createElement("div");
    card.className = "team-card"; // Add a CSS class for styling

    // Add the team member's image
    const cardImage = document.createElement("div");
    cardImage.className = "card-image"; // Add a CSS class for styling the image
    const img = document.createElement("img");
    img.src = member.image; // Set the source of the image
    img.alt = member.name; // Set alt text for accessibility
    cardImage.appendChild(img); // Append the image to the card image container

    // Add the content section (name, role, description)
    const cardContent = document.createElement("div");
    cardContent.className = "card-content"; // Add a CSS class for styling the content

    const name = document.createElement("h3");
    name.textContent = member.name; // Add the team member's name

    const role = document.createElement("p");
    role.className = "role"; // Add a CSS class for the role text
    role.textContent = member.role; // Add the team member's role

    const description = document.createElement("p");
    description.textContent = member.description; // Add the team member's description

    // Append the name, role, and description to the card content container
    cardContent.appendChild(name);
    cardContent.appendChild(role);
    cardContent.appendChild(description);

    // Assemble the card by appending the image and content sections
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    // Append the complete card to the main container
    teamContainer.appendChild(card);
  });
}

// Initialize Rendering
// This ensures the team cards are rendered as soon as the DOM is fully loaded.
document.addEventListener("DOMContentLoaded", renderTeam);
