import axios from "axios";

const resolvers = {
  Mutation: {
    addUser: async (context, args) => {
      const { user } = args;
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/users",
          {
            method: "POST",
            body: user,
          }
        );
        return response.data;
      } catch (error) {
        return null;
      }
    },
  },

  Query: {
    books: () => [
      { title: "React Learning", author: "Developer" },
      { title: "React Learning", author: "Developer" },
    ],
    users: async () => {
      try {
        const response = await axios(
          "https://jsonplaceholder.typicode.com/users"
        );
        return response.data;
      } catch (error) {
        return null;
      }
    },
    user: async (context, args) => {
      const { id } = args;

      try {
        const response = await axios(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        return response.data;
      } catch (error) {
        return null;
      }
    },
  },
};

export default resolvers;
