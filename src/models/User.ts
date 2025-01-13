import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface IUser extends Document {   //we are extending the IUser interface to Document in mongoose to use fn like save, remove, etc
  _id: string;
  username: string;
  email: string;
  phone: number;
  password: string;
}

const UserSchema: Schema = new Schema<IUser>({
  _id: { type: String, default: uuidv4 },
  username: { type: String, required: true },
  phone: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model<IUser>("User", UserSchema);

