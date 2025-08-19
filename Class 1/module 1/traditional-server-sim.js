console.log("Traditional server simulation!");
console.log("Handling 5 user requests...");

function processImageUpload(userId) {
  console.log(`User ${userId}: Starting image upload...`);

  // simulate heavy processing (blocking operation)
  const start = Date.now();
  while (Date.now() - start < 2000) {
    // blocking for 2 second per upload
  }

  console.log(`User ${userId}: Image uploaded!`);
}

function getUserFeed(userId) {
  console.log(`User ${userId}: Getting feed...`);
}

processImageUpload(1);
processImageUpload(2);
getUserFeed(3);
processImageUpload(4);
getUserFeed(5);

// process and thread
