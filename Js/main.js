// Step A: Define your data array with categories
// we have an array of objects and every object
// contains the info related to every container like the image the description categories and the price
const gamesData = [
  {
    title: "God Of War Ragnarök",
    text: "Delivers epic battles, heartfelt storytelling, Norse mythology, and unforgettable action-adventure gameplay.",
    price: "29.99$",
    link: "#",
    imgSrc: "images/god of war.webp",
    category: "Action",
  },
  {
    title: "FC 25",
    text: "The FC25 offers exceptional performance, reliability, efficiency, modern design, and unmatched value.",
    price: "24.99$",
    link: "#",
    imgSrc: "images/fc25.jpeg",
    category: "Action",
  },
  {
    title: "Call of Duty: Black Ops 6",
    text: "Delivers intense action, gripping storylines, cutting-edge graphics, multiplayer excitement, and innovation.",
    price: "49.99$",
    link: "#",
    imgSrc: "images/ops6.jpeg",
    category: "Action",
  },
  {
    title: "Need for Speed Heat",
    text: "Offers thrilling street racing, customizable cars, dynamic challenges, and non-stop adrenaline-fueled action.",
    price: "9.99$",
    link: "#",
    imgSrc: "images/nfs heat.jpeg",
    category: "Racing",
  },
  {
    title: "Grand Theft Auto V",
    text: "Delivers an expansive open world, gripping story, dynamic characters, multiplayer mayhem, and endless entertainment.",
    price: "19.99$",
    link: "#",
    imgSrc: "images/Grand Theft Auto V.jpg",
    category: "Racing",
  },
  {
    title: "Black Myth: Wukong",
    text: "Offers breathtaking visuals, immersive gameplay, epic battles, and an unforgettable action-adventure experience.",
    price: "54.99$",
    link: "#",
    imgSrc: "images/wokung.jpeg",
    category: "Racing",
  },
  {
    title: "ELDEN RING",
    text: "Delivers a vast open world, gripping lore, challenging combat, stunning visuals, and unparalleled epic adventures.",
    price: "39.99$",
    link: "#",
    imgSrc: "images/eldin ring.jpeg",
    category: "Action",
  },
  {
    title: "Hitman 3",
    text: "Offers stealth action, intricate missions, creative assassinations, and the ultimate professional assassin experience.",
    price: "49.99$",
    link: "#",
    imgSrc: "images/hitman 3.jpeg",
    category: "Action",
  },
];

// Step B: Grab the parent container and modal elements
// These elements are used to render game cards and handle modal popups.

//we get our container from the html and store it in a variable so we can render it dynamically

const cardsContainer = document.getElementById("cardsContainer");
const modal = document.getElementById("popupModal");
const popupContent = document.getElementById("popupContent");
const closeButton = document.querySelector(".close-button");

// Function to render cards
// This function dynamically creates and appends game cards based on the filtered data.
// we merged the rendering function and the filter function in one function
// The rendder cards function takes the filtered category as a parameter and show them in  the page

function renderCards(filteredGames) {
  cardsContainer.innerHTML = ""; // Clear existing cards

  // Iterate through each game and create card elements
  filteredGames.forEach((game) => {
    const card = document.createElement("div");
    card.className = "card";

    // Game image
    const image = document.createElement("img");
    image.src = game.imgSrc;
    image.alt = game.title;

    // Card text (title and description)
    const cardText = document.createElement("div");
    cardText.className = "cardText";

    const title = document.createElement("h3");
    title.textContent = game.title;

    const description = document.createElement("p");
    description.textContent = game.text;

    cardText.appendChild(title);
    cardText.appendChild(description);

    // Price and Buy Now button section
    const info = document.createElement("div");
    info.className = "info";

    const priceLink = document.createElement("a");
    priceLink.href = "#";
    priceLink.textContent = game.price;

    const buyLink = document.createElement("a");
    buyLink.href = "#";
    buyLink.innerHTML = ` BUY NOW <i class="fas fa-long-arrow-alt-right"></i>`;
    buyLink.className = "buy-now-button";

    // Add event listener for Buy Now button
    buyLink.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior
      openModal(game); // Open modal with game details
    });

    info.appendChild(priceLink);
    info.appendChild(buyLink);

    card.appendChild(image);
    card.appendChild(cardText);
    card.appendChild(info);

    cardsContainer.appendChild(card); // Add card to container
  });
}

// Initial render of all cards (all games are displayed by default)
renderCards(gamesData);

// Step C: Add event listeners for filtering games by category

// Filtering using the built in method in js filter

// Show all games
document.getElementById("showAll").addEventListener("click", () => {
  // Here  as we didnt add any condition for rendering it ll render all the games exists in the gamesData array
  renderCards(gamesData);
});

// Show action games only
document.getElementById("showAction").addEventListener("click", () => {
  const actionGames = gamesData.filter((game) => game.category === "Action");
  renderCards(actionGames);
});

// Show racing games only
document.getElementById("showRacing").addEventListener("click", () => {
  const racingGames = gamesData.filter((game) => game.category === "Racing");
  renderCards(racingGames);
});

// Function to open the modal
// This function shows a modal with the game details and checkout form.
function openModal(game) {
  popupContent.innerHTML = `
    <img src="${game.imgSrc}" alt="${game.title}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
    <h2>${game.title}</h2>
    <p>${game.text}</p>
    <h3>Price: ${game.price}</h3>
    <form id="checkoutForm">
      <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name" required>
      
      <label for="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" maxlength="16" required>
      
      <label for="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" name="paymentMethod" required>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      
      <button type="submit" id="confirmCheckout" style="margin-top: 20px;">Confirm Checkout</button>
    </form>
  `;
  modal.style.display = "block"; // Show the modal

  // Handle form submission for checkout
  const checkoutForm = document.getElementById("checkoutForm");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    alert("Thank you for your purchase!");
    modal.style.display = "none"; // Close the modal after checkout
  });
}

// Close the modal when the close button is clicked
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Grab modal elements for subscriptions
const subscriptionModal = document.getElementById("subscriptionModal");
const subscriptionPopupContent = document.getElementById(
  "subscriptionPopupContent"
);
const closeSubscriptionButton = document.querySelector(
  "#subscriptionModal .close-button"
);

// Function to open the subscription modal
// Displays subscription details and a checkout form in a modal.
function openSubscriptionModal(data) {
  subscriptionPopupContent.innerHTML = `
    <img src="${data.img}" alt="${data.title}" style="width: 100%; border-radius: 10px; margin-bottom: 20px;">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    <h3>Price: ${data.price}</h3>
    <form id="subscriptionCheckoutForm">
     <label for="name">Full Name:</label>
      <input type="text" id="name" name="name" placeholder="Enter your full name" required>
      
      <label for="cardNumber">Card Number:</label>
      <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter your card number" maxlength="16" required>
      
      <label for="paymentMethod">Payment Method:</label>
      <select id="paymentMethod" name="paymentMethod" required>
        <option value="creditCard">Credit Card</option>
        <option value="paypal">PayPal</option>
      </select>
      
      <button type="submit" id="confirmCheckout" style="margin-top: 20px;">Confirm Checkout</button>
    </form>
  `;
  subscriptionModal.style.display = "block"; // Show subscription modal

  // Handle form submission for subscriptions
  const subscriptionCheckoutForm = document.getElementById(
    "subscriptionCheckoutForm"
  );
  subscriptionCheckoutForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    alert(`Thank you for purchasing the ${data.title}!`);
    subscriptionModal.style.display = "none"; // Close the modal
  });
}

// Add event listeners to all subscription "Buy Now" buttons
// Opens the subscription modal with specific details when clicked.
document.querySelectorAll(".subscription-buy-now").forEach((button) => {
  button.addEventListener("click", () => {
    const subscriptionData = {
      title: button.getAttribute("data-title"),
      price: button.getAttribute("data-price"),
      img: button.getAttribute("data-img"),
      description: button.getAttribute("data-description"),
    };
    openSubscriptionModal(subscriptionData); // Open modal with subscription details
  });
});

// Close the subscription modal
closeSubscriptionButton.addEventListener("click", () => {
  subscriptionModal.style.display = "none";
});

// Close subscription modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === subscriptionModal) {
    subscriptionModal.style.display = "none";
  }
});
