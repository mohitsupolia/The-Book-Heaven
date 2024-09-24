import express from "express"
import cors from "cors"
import {MongoClient, ObjectId, ServerApiVersion} from "mongodb"
import dotenv from "dotenv";
import Razorpay from 'razorpay';

// Load environment variables from .env file
dotenv.config();

const app = express()
const port = process.env.PORT || 8080

// Middleware
app.use(cors());
app.use(express.json());

// Payment Scetion.....
// Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_ID, // Your Razorpay Key ID
  key_secret: process.env.RAZORPAY_SECRET_KEY, // Your Razorpay Secret Key
});

// Endpoint to create an order
app.post("/create-order", async (req, res) => {
  const { amount } = req.body;

  try {
    const options = {
      amount: amount * 100, // Razorpay accepts payment in paise, so multiply by 100
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
    };

    const order = await razorpay.orders.create(options);
    console.log(order);
    res.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
      status: "created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Order creation failed", error: error.message });
  }
});




app.get('/', (req, res) => (
    res.send("Hello world")
))

// mongodb configuration. This is the code is copy for mongodb atlas

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Create a collection of documents !!!
    const bookCollections = client.db("bookstore").collection("books")

    // Insert a book to the database: using post method !!!

    app.post("/upload-book", async(req, res) => {
        const data = req.body
        // this step go to mongodb docs and further go to insert opertion section then copy the code...
        const result = await bookCollections.insertOne(data)
        res.send(result)
    })

    // Get all the books from the database !!!!
    // app.get("/all-books", async(req, res) => {
    //     const books = bookCollections.find();
    //     const result = await books.toArray();
    //     res.send(result);
    // })

    // Update a book data from the database using Patch() method  !!!!!
    app.patch("/book/:id", async(req, res) => {
        const id = req.params.id;
        // console.log(id)
        // This code is check for mongodb docs 
        const updateBookData = req.body;
        const filter = {_id: new ObjectId(id)}
        const options = {upsert: true}

        const updateDoc = {
            $set: {
                ...updateBookData
            }
        }
        // Update the data
        const result = await bookCollections.updateOne(filter, updateDoc, options)
        res.send(result);
    })

    // Delete a book data from database !!!!!
    app.delete("/book/:id", async(req, res) => {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)};
        const result = await bookCollections.deleteOne(filter)
        res.send(result)
    })

    // Find by category the data
    app.get("/all-books", async(req, res) => {
        let query = {};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await bookCollections.find(query).toArray();
        res.send(result);
    })

    // To get single book data...
    app.get("/book/:id", async(req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id)};
      const result =await bookCollections.findOne(filter)
      res.send(result);
    })

     // Search of book by using category only...
     app.get("/book-category/:category", async(req, res) => {
      try{
      const category = req.params.category;
       // Filter books by category field
      const filter = { category: category }; // Assuming your collection has a 'category' field
      const result = await bookCollections.find(filter).toArray(); // Find all books matching the category

      if (result.length === 0) {
        return res.status(404).json({ message: 'No books found for this category.' });
      }
         res.send(result);
    //   res.status(200).json(result); // Send the found books as a response
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
        }
     });


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Server is running !!! on port ${port}`)
})