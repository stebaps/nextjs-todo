import { createServer, Model } from "miragejs";

const makeServer = () => {
  const server = createServer({
    models: {
      todo: Model.extend(),
    },
    routes() {
      this.get("/api/todos", (schema, request) => {
        return schema.db.todos;
      });

      this.post("/api/todos", (schema, request) => {
        const attrs = {
          text: request.requestBody.todo,
          complete: false,
          createdAt: new Date(),
        };

        return schema.db.todos.insert(attrs);
      });

      this.patch("/api/todos/:id", (schema, request) => {
        const id = request.params.id;
        const attrs = {
          text: request.requestBody.text,
          complete: request.requestBody.complete,
        };

        const todo = schema.todos.find(id);
        todo.update(attrs);

        return todo;
      });
    },
  });

  server.db.loadData({
    todos: [
      {
        id: "1",
        text: "Walk the dog",
        complete: false,
        createdAt: "2020-10-22T08:37:13.309Z",
      },
      {
        id: "2",
        text: "Buy groceries",
        complete: false,
        createdAt: "2020-10-22T09:37:13.309Z",
      },
      {
        id: "3",
        text: "Make dinner",
        complete: false,
        createdAt: "2020-10-22T10:37:13.309Z",
      },
    ],
  });
};

export default makeServer;
