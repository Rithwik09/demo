import User from '../models/User';

export const resolvers = {
  Query: {
    // Fetch all users
    getUsers: async () => {
      try {
        const users = await User.find(); // Fetch all users from the database

        if (users.length === 0) {
          throw new Error('No users present');
        }

        return users; // Return the list of users if they exist
      } catch (error :any) {
        throw new Error(`Failed to fetch users: ${error.message}`);
      }
    },
  },

  Mutation: {
    registerUser: async (_: any, { name, email, password }: { name: string; email: string; password: string }) => {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error('User already exists');
      }

      // Create a new user
      const newUser = new User({
        name,
        email,
        password, // Consider hashing this before saving
        createdAt: new Date().toISOString(),
      });

      await newUser.save();
      return newUser;
    },
  },
};
