import mongoose, { Schema, Document } from "mongoose";
import { v4 as uuidv4 } from "uuid";

// Interface for the Vehicle model
export interface IVehicle extends Document {
  _id: string;
  type: string; // Boat, Car, or Plane
  parkingSpot: string;
  registrationNumber: string;
  passes: string[]; // Array of pass IDs
}

// Define the schema for the Vehicle model
const VehicleSchema: Schema = new Schema<IVehicle>({
  _id: { type: String, default: uuidv4 },
  type: { type: String, required: true },
  parkingSpot: { type: String, required: true },
  registrationNumber: { type: String, required: true },
  passes: [{ type: String }],
});

export default mongoose.model<IVehicle>("Vehicle", VehicleSchema);
