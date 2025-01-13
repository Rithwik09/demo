import { IUser, default as User } from '../models/User'; // User model
import { IVendor, default as Vendor } from '../models/Vendor'; // Vendor model
import { IVehicle, default as Vehicle } from '../models/Vehicle'; // Vehicle model
import { IPass, default as Pass } from '../models/Pass'; // Pass model

export const resolvers = {
  Query: {
    // Fetch all users
    users: async () => {
      try {
        return await User.find();
      } catch (error :any ) {
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
    },

    // Fetch all vendors
    vendors: async () => {
      try {
        return await Vendor.find();
      } catch (error :any ) {
        throw new Error(`Failed to fetch vendors: ${error.message}`);
      }
    },

    // Fetch all vehicles
    vehicles: async () => {
      try {
        return await Vehicle.find();
      } catch (error :any ) {
        throw new Error(`Failed to fetch vehicles: ${error.message}`);
      }
    },

    // Fetch all passes
    passes: async () => {
      try {
        return await Pass.find();
      } catch (error :any ) {
        throw new Error(`Failed to fetch passes: ${error.message}`);
      }
    },

    // Fetch a single vendor by ID
    vendor: async (_: any, { id }: { id: string }) => {
      try {
        const vendor = await Vendor.findById(id);
        if (!vendor) {
          throw new Error('Vendor not found');
        }
        return vendor;
      } catch (error :any ) {
        throw new Error(`Failed to fetch vendor: ${error.message}`);
      }
    },

    // Fetch a single vehicle by ID
    vehicle: async (_: any, { id }: { id: string }) => {
      try {
        const vehicle = await Vehicle.findById(id);
        if (!vehicle) {
          throw new Error('Vehicle not found');
        }
        return vehicle;
      } catch (error :any ) {
        throw new Error(`Failed to fetch vehicle: ${error.message}`);
      }
    },
  },

  Mutation: {
    // Register a new user
    registerUser: async (
      _: any,
      { username, email, phone, password }: { username: string; email: string; phone: number; password: string }
    ) => {
      try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          throw new Error('User already exists');
        }

        const newUser = new User({
          username,
          email,
          phone,
          password, // Consider hashing before saving
        });

        await newUser.save();
        return newUser;
      } catch (error :any ) {
        throw new Error(`Failed to register user: ${error.message}`);
      }
    },

    // Create a new vendor
    createVendor: async (_: any, { name, email }: { name: string; email: string }) => {
      try {
        const newVendor = new Vendor({
          name,
          email,
        });

        await newVendor.save();
        return newVendor;
      } catch (error :any ) {
        throw new Error(`Failed to create vendor: ${error.message}`);
      }
    },

    // Create a new vehicle
    createVehicle: async (
      _: any,
      { type, registrationNumber }: { type: string; registrationNumber: string }
    ) => {
      try {
        const newVehicle = new Vehicle({
          type,
          registrationNumber,
        });

        await newVehicle.save();
        return newVehicle;
      } catch (error :any ) {
        throw new Error(`Failed to create vehicle: ${error.message}`);
      }
    },

    // Create a new pass
    createPass: async (
      _: any,
      { vehicleId, vendorId, validUntil }: { vehicleId: string; vendorId: string; validUntil: string }
    ) => {
      try {
        const newPass = new Pass({
          vehicleId,
          vendorId,
          validUntil,
        });

        await newPass.save();
        return newPass;
      } catch (error :any ) {
        throw new Error(`Failed to create pass: ${error.message}`);
      }
    },
  },
};
