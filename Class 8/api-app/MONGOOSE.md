# **Introduction to Mongoose**

## **What is Mongoose?**

Mongoose is an **Object Data Modeling (ODM)** library for **MongoDB** and **Node.js**. It provides a **schema-based approach** to structuring MongoDB data and offers built-in features such as:

- **Schema definition**
- **Data validation**
- **Query building**
- **Middleware (Hooks)**
- **Population (Relationships)**
- **Indexing for performance optimization**

## **Why Use Mongoose?**

Mongoose simplifies the interaction with MongoDB by providing a structured way to work with data. Instead of dealing with unstructured JSON-like documents, we can use **models and schemas** to enforce rules.

### **Key Features of Mongoose**

| Feature           | Description                                             |
| ----------------- | ------------------------------------------------------- |
| Schema Definition | Allows defining structured data for MongoDB collections |
| Data Validation   | Provides built-in validation for fields                 |
| Query Helpers     | Simplifies CRUD operations with built-in methods        |
| Middleware        | Enables pre/post hooks for document processing          |
| Population        | Helps in referencing documents across collections       |
| Indexing          | Improves query performance                              |

## **Comparison: Mongoose vs Native MongoDB Driver**

| Feature                    | MongoDB Native Driver | Mongoose    |
| -------------------------- | --------------------- | ----------- |
| Schema Definition          | ❌ No                 | ✅ Yes      |
| Data Validation            | ❌ No                 | ✅ Yes      |
| Middleware                 | ❌ No                 | ✅ Yes      |
| Query Builders             | ❌ Manual             | ✅ Built-in |
| Relationships (Population) | ❌ No                 | ✅ Yes      |

## **How Mongoose Works**

1. **Connect to MongoDB** → Establish a connection using Mongoose.
2. **Define a Schema** → Create a schema to structure data.
3. **Create a Model** → Convert the schema into a model to interact with MongoDB.
4. **Perform CRUD Operations** → Use Mongoose methods to **Create, Read, Update, and Delete** documents.

### **Example: Simple Mongoose Schema**

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
```
