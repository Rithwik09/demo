import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Interface for the Pass model
export interface IPass extends Document {
  _id: string;
  vehicleId: string; // UUID reference to Vehicle
  vendorId: string;  // UUID reference to Vendor
  validUntil: string;
}

// Define the schema for the Pass model
const PassSchema: Schema = new Schema<IPass>({
  _id: { type: String, default: uuidv4 },
  vehicleId: { type: String, required: true },
  vendorId: { type: String, required: true },
  validUntil: { type: String, required: true },
});

const Pass = mongoose.model<IPass>("Pass", PassSchema);

export default Pass; // Correct export
