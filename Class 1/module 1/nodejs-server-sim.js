console.log("Node.js server simulation!");

function processImageUpload(userId) {
  console.log(`User ${userId}: Starting image upload...`);

  // simulate heavy processing (non-blocking operation)
  setTimeout(() => {
    console.log(`User ${userId}: Image upload! (background process)`);
  }, 2000);
}

function getUserFeed(userId) {
  console.log(`User ${userId}: Getting feed...`);
}

processImageUpload(1);
processImageUpload(2);
getUserFeed(3);
processImageUpload(4);
getUserFeed(5);

// Event loop

// Non blocking
