import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    console.log('✅ Connected to MongoDB');

    const PORT = 3002;

    app.listen(PORT, () => {
      console.log(`🚀 Server is running on http://localhost:${PORT}`);
    });
  }
  )
  .catch(() => console.log('❗Error to connect MongoDB'));

