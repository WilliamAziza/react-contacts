const initialState = {
  users: [
    {
      name: "William",
      email: "willie@gmail.com",
      gen: 24,
      id: "sadsd"
    },
    {
      name: "John",
      email: "john@gmail.com",
      gen: 15,
      id: "qwert"
    }
  ]
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        gen: action.payload.gen,
        id: Math.random().toString()
      };
      return { ...state, users: [...state.users, newUser] };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(user => user.id !== action.payload);
      return { ...state, users: filteredUsers };

    case "EDIT_USER":
      const updatedUsers = state.users.map(user =>
        user.id === action.payload.id ? action.payload.user : user
      );
      return { ...state, users: updatedUsers };

    default:
      return state;
  }
};

export default contactReducer;
