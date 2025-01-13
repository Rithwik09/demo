import { gql } from 'apollo-server-express';

export const typeDefs = gql`

type User {
    id: ID!  # UUID for Vendor
    name: String!
    email: String!
    createdAt: String!
    type: String!
    passes: [Pass]!  # Nullable array of Passes (can be null or empty)
  }


  type Vendor {
    id: ID!  # UUID for Vendor
    name: String!
    email: String!
    type: String!
    createdAt: String!
    passes: [Pass]!  # Nullable array of Passes (can be null or empty)
  }

  type Vehicle {
    id: ID!  # UUID for Vehicle
    type: String!  # boat, car, or plane
    parkingSpot: String!
    registrationNumber: String!
    passes: [Pass]!  # Nullable array of Passes (can be null or empty)
  }

  type Pass {
    id: ID!  # UUID for Pass
    vehicleId: String  # UUID reference to Vehicle
    vendorId: String  # UUID reference to Vendor
    validUntil: String!
  }

  type Query {
    vendors: [Vendor!]!
    vehicles: [Vehicle!]!
    passes: [Pass!]!
    vendor(id: ID!): Vendor
    vehicle(id: ID!): Vehicle
  }

  type Mutation {
    createUser(name: String!, email: String!): User!
    createVendor(name: String!, email: String!): Vendor!
    createVehicle(type: String!, registrationNumber: String!): Vehicle!
    createPass(vehicleId: String!, vendorId: String!, validUntil: String!): Pass!
  }`;
