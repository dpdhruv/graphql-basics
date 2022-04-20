const TodoService = ({ request }) => {
  const getTodoById = async (id) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/todos/1', {
      id,
    });
    console.log('response', response);
    return response;
  };
  return {
    getTodoById,
  };
};

module.exports = TodoService;
