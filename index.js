// Import dependencies
import express from "express";
import bodyParser from "body-parser";
import categories from "./data/categories.js"; // Import date idea categories

const app = express();
const port = process.env.PORT || 3000;

// Middleware to serve static files (e.g., CSS, images) from "public" folder
app.use(express.static("public"));

// Middleware to parse form data submitted via POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// GET route for the homepage
// Renders the initial view with no date result and default category
app.get("/", (req, res) => {
  res.render("index.ejs", {
    heading: "<h1>Let’s Plan a Cute Date 💕</h1>",
    result: "",
    selectedCategory: "",
    isRegenerated: false, // Used to control button text
  });
});

// POST route triggered when user submits the form
// Generates and displays a new date idea based on selected category
app.post("/generate", (req, res) => {
  const category = req.body.category;
  const randomIdea = generateRandomIdea(category, categories);

  res.render("index.ejs", {
    heading: "<h1>Go On, Pookie... Give It a Shot 🌸</h1>",
    result: `<p>${randomIdea}</p>`,
    selectedCategory: category, // Keeps dropdown selection persistent
    isRegenerated: true,        // Switches button label to "Try Again?"
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Helper function to generate a random idea from a given category
// If "Wildcard" is selected, it randomly picks a category first
function generateRandomIdea(category, categories) {
  if (category === "Wildcard") {
    const randomCategory =
      Object.keys(categories)[
        Math.floor(Math.random() * Object.keys(categories).length)
      ];
    const randomActivity =
      categories[randomCategory][
        Math.floor(Math.random() * categories[randomCategory].length)
      ];
    return `Wildcard chose: ${randomCategory} - ${randomActivity}`;
  } else {
    const activities = categories[category];
    const randomActivity =
      activities[Math.floor(Math.random() * activities.length)];
    return `${category} - ${randomActivity}`;
  }
}
