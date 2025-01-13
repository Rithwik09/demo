import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Interface for the Vendor model
export interface IVendor extends Document {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
  passes: string[]; // Array of pass IDs
}

// Define the schema for the Vendor model
const VendorSchema: Schema = new Schema<IVendor>({
  _id: { type: String, default: uuidv4 },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: String, required: true },
  passes: [{ type: String }],
});

export default mongoose.model<IVendor>("Vendor", VendorSchema);
