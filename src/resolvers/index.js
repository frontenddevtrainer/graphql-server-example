const resolvers = {
  Query: {
    books: () => [{ title: "React Learning", author: "Developer" }, { title: "Angular Learning", author: "Developer" }],
  },
};

export default resolvers;
