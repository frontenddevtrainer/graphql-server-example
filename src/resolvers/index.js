import axios from "axios";

const resolvers = {
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
