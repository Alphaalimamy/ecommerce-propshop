import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline);
    process.exit(1);
  }
};

// const url = process.env.MONGO_URL;
// const connectDB = () => {
//   mongoose
//     .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() =>
//       app
//         .listen(PORT, () => console.log("Server up and running!"))
//         .catch((error) => console.log(error.message))
//     );
// };
export default connectDB;
