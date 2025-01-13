import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type User {
    id: ID!           # UUID for User
    name: String!
    email: String!
    createdAt: String!
    type: String!     # User type, e.g., "User", "Admin", etc.
    passes: [Pass]!   # Nullable array of Passes (can be null or empty)
  }

  type Vendor {
    id: ID!           # UUID for Vendor
    name: String!
    email: String!
    type: String!
    createdAt: String!
    passes: [Pass]!   # Nullable array of Passes (can be null or empty)
  }

  type Vehicle {
    id: ID!                   # UUID for Vehicle
    type: String!             # boat, car, or plane
    parkingSpot: String!
    registrationNumber: String!
    passes: [Pass]!           # Nullable array of Passes (can be null or empty)
  }

  type Pass {
    id: ID!                   # UUID for Pass
    vehicleId: String         # UUID reference to Vehicle
    vendorId: String          # UUID reference to Vendor
    validUntil: String!
  }

  type Query {
    users: [User!]!           # Fetch all users
    vendors: [Vendor!]!       # Fetch all vendors
    vehicles: [Vehicle!]!     # Fetch all vehicles
    passes: [Pass!]!          # Fetch all passes
    vendor(id: ID!): Vendor   # Fetch a specific vendor by ID
    vehicle(id: ID!): Vehicle # Fetch a specific vehicle by ID
  }

  type Mutation {
    registerUser(
      username: String!
      email: String!
      phone: Int!
      password: String!
    ): User!                    # Register a new user

    createVendor(
      name: String!
      email: String!
    ): Vendor!                  # Create a new vendor

    createVehicle(
      type: String!
      registrationNumber: String!
    ): Vehicle!                 # Create a new vehicle

    createPass(
      vehicleId: String!
      vendorId: String!
      validUntil: String!
    ): Pass!                    # Create a new pass
  }
`;
