/******************************
 * 1. Data Structure
 ******************************/
// An object containing gift card data for various categories like GooglePlay, PS, iTunes, etc.
// Each category has an array of objects representing individual gift cards.
const giftCardsData = {
  GooglePlay: [
    {
      title: "Google Play Gift Card $10",
      originalPrice: "$10.00",
      salePrice: "$9.00",
      image: "/images/Google-Play-Gift-Card.png",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Google Play Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$23.00",
      image: "/images/Google-Play-Gift-Card.png",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Google Play Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$45.00",
      image: "/images/Google-Play-Gift-Card.png",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Google Play Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$92.00",
      image: "/images/Google-Play-Gift-Card.png",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
  ],
  PS: [
    {
      title: "PlayStation Gift Card $10",
      originalPrice: "$10.00",
      salePrice: "$9.00",
      image: "/images/ps.webp",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "PlayStation Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$22.00",
      image: "/images/ps.webp",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "PlayStation Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$42.00",
      image: "/images/ps.webp",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "PlayStation Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$90.00",
      image: "/images/ps.webp",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
  ],
  iTunes: [
    {
      title: "iTunes Gift Card $10",
      originalPrice: "$12.00",
      salePrice: "$10.00",
      image: "/images/iTunes-Gift-Card.jpeg.crdownload",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "iTunes Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$22.00",
      image: "/images/iTunes-Gift-Card.jpeg.crdownload",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "iTunes Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$46.00",
      image: "/images/iTunes-Gift-Card.jpeg.crdownload",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "iTunes Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$90.00",
      image: "/images/iTunes-Gift-Card.jpeg.crdownload",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
  ],
  RazerGold: [
    {
      title: "Razer Gold Gift Card $10",
      originalPrice: "$10.00",
      salePrice: "$9.00",
      image: "/images/razer gold.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Razer Gold Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$23.00",
      image: "/images/razer gold.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Razer Gold Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$45.00",
      image: "/images/razer gold.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Razer Gold Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$94.00",
      image: "/images/razer gold.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
  ],
  Steam: [
    {
      title: "Steam Gift Card $10",
      originalPrice: "$10.00",
      salePrice: "$9.00",
      image: "/images/steam.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Steam Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$22.00",
      image: "/images/steam.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Steam Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$45.00",
      image: "/images/steam.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
    {
      title: "Steam Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$90.00",
      image: "/images/steam.jpeg",
      delivery: "Instant delivery",
      availability: "Available worldwide",
    },
  ],
  Xbox: [
    {
      title: "Xbox Gift Card $10",
      originalPrice: "$10.00",
      salePrice: "$9.00",
      image: "/images/xbox.jpeg",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "Xbox Gift Card $25",
      originalPrice: "$25.00",
      salePrice: "$23.00",
      image: "/images/xbox.jpeg",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "Xbox Gift Card $50",
      originalPrice: "$50.00",
      salePrice: "$46.00",
      image: "/images/xbox.jpeg",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
    {
      title: "Xbox Gift Card $100",
      originalPrice: "$100.00",
      salePrice: "$91.00",
      image: "/images/xbox.jpeg",
      delivery: "Instant delivery",
      availability: "Available in these countries: United States",
    },
  ],
};
/******************************
 * 2. Get Query Param
 ******************************/
// Function to retrieve the query parameter from the URL.
// For example, if the URL is `?category=PS`, this function will return "PS".
function getQueryParams() {
  const params = new URLSearchParams(window.location.search); // Parse the query to string
  return params.get("category"); // Retrieve the value of the "category" parameter
}

/******************************
 * 3. Display Gift Cards
 ******************************/
// Function to dynamically display gift cards on the page based on the selected category.
function displayGiftCards() {
  const category = getQueryParams(); // Get the selected category from the URL
  const container = document.getElementById("giftcardsContainer"); // Get the container where gift cards will be displayed

  // If the category is invalid or not found in the data, show a fallback message
  if (!category || !giftCardsData[category]) {
    container.innerHTML = `<p>No available gift cards for the selected category.</p>`;
    return;
  }

  // Create and append a heading for the selected category
  const title = document.createElement("h2");
  title.textContent = `${category} Gift Cards`; // e.g., "PS Gift Cards"
  container.appendChild(title);

  // Iterate through the array of gift cards in the selected category
  giftCardsData[category].forEach((item) => {
    // Create a card container for each gift card
    const cardDiv = document.createElement("div");
    cardDiv.className = "gift-card-item"; // Add a CSS class for styling

    // Add the image section
    const imageDiv = document.createElement("div");
    imageDiv.className = "card-image"; // Add a CSS class for styling
    const img = document.createElement("img");
    img.src = item.image; // Set the image source
    img.alt = item.title; // Set the alt text for accessibility
    imageDiv.appendChild(img);

    // Add the details section
    const detailsDiv = document.createElement("div");
    detailsDiv.className = "card-details"; // Add a CSS class for styling

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = item.title; // Display the gift card title

    const deliveryP = document.createElement("p");
    deliveryP.className = "delivery-status"; // Add a CSS class for styling
    deliveryP.textContent = item.delivery; // Display delivery information

    const availabilityP = document.createElement("p");
    availabilityP.className = "availability"; // Add a CSS class for styling
    availabilityP.textContent = item.availability; // Display availability information

    // Append title, delivery, and availability to the details section
    detailsDiv.appendChild(cardTitle);
    detailsDiv.appendChild(deliveryP);
    detailsDiv.appendChild(availabilityP);

    // Add the price section
    const priceSection = document.createElement("div");
    priceSection.className = "price-section"; // Add a CSS class for styling

    const originalSpan = document.createElement("span");
    originalSpan.className = "original-price"; // Add a CSS class for styling
    originalSpan.textContent = item.originalPrice; // Display the original price

    const saleSpan = document.createElement("span");
    saleSpan.className = "sale-price"; // Add a CSS class for styling
    saleSpan.textContent = item.salePrice; // Display the sale price

    // Append original and sale prices to the price section
    priceSection.appendChild(originalSpan);
    priceSection.appendChild(saleSpan);

    // Add the action section (Buy Now button)
    const actionDiv = document.createElement("div");
    actionDiv.className = "card-action"; // Add a CSS class for styling

    const buyBtn = document.createElement("button");
    buyBtn.className = "buy-now-btn"; // Add a CSS class for styling
    buyBtn.textContent = "Buy Now"; // Button text

    // Add an event listener for the Buy Now button to open the checkout modal
    buyBtn.addEventListener("click", () => {
      openCheckoutModal(item);
    });

    // Append the Buy Now button to the action section
    actionDiv.appendChild(buyBtn);

    // Assemble the card by appending all sections
    cardDiv.appendChild(imageDiv);
    cardDiv.appendChild(detailsDiv);
    cardDiv.appendChild(priceSection);
    cardDiv.appendChild(actionDiv);

    // Append the card to the container
    container.appendChild(cardDiv);
  });
}

/******************************
 * 4. Checkout Modal Logic
 ******************************/
// Function to handle the checkout modal for a selected gift card
function openCheckoutModal(item) {
  const modal = document.getElementById("checkoutModal"); // Get the modal element
  const modalContent = document.getElementById("modalContent"); // Get the modal content area

  // Populate the modal with gift card details and a checkout form
  modalContent.innerHTML = `
    <div class="modal-header">
      <h2>${item.title}</h2>
      <button class="close-modal">&times;</button>
    </div>
    <div class="modal-body">
      <img src="${item.image}" alt="${item.title}" class="modal-image">
      <p><strong>Delivery:</strong> ${item.delivery}</p>
      <p><strong>Availability:</strong> ${item.availability}</p>
      <p><strong>Price:</strong> <span class="sale-price">${item.salePrice}</span> <span class="original-price">${item.originalPrice}</span></p>
      <form id="checkoutForm">
        <label for="name">Full Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" required>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
        <label for="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" name="paymentMethod" required>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="crypto">Cryptocurrency</option>
        </select>
        <button type="submit" class="confirm-btn">Confirm Checkout</button>
      </form>
    </div>
  `;

  // Show the modal
  modal.style.display = "block";

  // Close the modal when the close button is clicked
  const closeModal = modal.querySelector(".close-modal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Handle the form submission
  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Checkout Confirmed!"); // Simulate confirmation
    modal.style.display = "none"; // Close the modal
  });
}

/******************************
 * 5. Initialize on Load
 ******************************/
// When the page loads, display the gift cards for the selected category
window.onload = displayGiftCards;
