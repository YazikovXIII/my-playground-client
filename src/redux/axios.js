export const API_URL = "http://localhost:5000";
// "https://my-playground-server.onrender.com"
// "http://localhost:5000"

const stateOfApp = {
  todos: {
    todos: [],
    isRefreshing: false,
    error: null,
  },
  auth: {
    user: {
      email: "vladzaraza@gmail.com",
      name: "Vlad",
      username: "bear_d",
      id: "653e589925dac0dfac2f4079",
      isActivated: true,
    },
    token: null,
    isLoggedin: true,
    isRefreshing: false,
    error: null,
  },
  posts: {
    posts: [
      {
        _id: "654940eddddabb360458ee3d",
        user: "653e589925dac0dfac2f4079",
        imgURL: "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699299563/posts/_DSC8862.jpg.jpg",
        header: "PS5",
        text: "photo of ps 5",
        createdAt: "2023-11-06T19:39:25.425Z",
        updatedAt: "2023-11-06T19:39:25.425Z",
      },
      {
        _id: "6548e52f3841a9a3dea16a58",
        user: "653fd5218f4fc08c6d29ca40",
        imgURL: "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699269537/posts/Teso-logo.png.png",
        header: "TESO LOGO",
        text: "other user added post with gameLogo",
        createdAt: "2023-11-06T13:07:59.308Z",
        updatedAt: "2023-11-06T13:07:59.308Z",
      },
      {
        _id: "6548e14186449dda594d3b46",
        user: "653e589925dac0dfac2f4079",
        imgURL:
          "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699275071/posts/%C3%90%C2%97%C3%90%C2%BD%C3%91%C2%96%C3%90%C2%BC%C3%90%C2%BE%C3%90%C2%BA%20%C3%90%C2%B5%C3%90%C2%BA%C3%91%C2%80%C3%90%C2%B0%C3%90%C2%BD%C3%90%C2%B0%202023-11-06%20144958.png.png",
        header: "New Post on Deployed Client",
        text: "just checking if everything works as good as on localhost",
        createdAt: "2023-11-06T12:51:13.432Z",
        updatedAt: "2023-11-06T12:51:13.432Z",
      },
      {
        _id: "6548cea34e382ed42288bd5d",
        user: "653e589925dac0dfac2f4079",
        imgURL:
          "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699270306/posts/%C3%90%C2%97%C3%90%C2%BD%C3%91%C2%96%C3%90%C2%BC%C3%90%C2%BE%C3%90%C2%BA%20%C3%90%C2%B5%C3%90%C2%BA%C3%91%C2%80%C3%90%C2%B0%C3%90%C2%BD%C3%90%C2%B0%202023-11-06%20104631.png.png",
        header: "big mess",
        text: "my files are a big stinky pile!looks like I need to learn how to organize the project right",
        createdAt: "2023-11-06T11:31:47.871Z",
        updatedAt: "2023-11-06T11:31:47.871Z",
      },
      {
        _id: "6548cdb94e382ed42288bd57",
        user: "653e589925dac0dfac2f4079",
        imgURL:
          "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699270071/posts/%C3%90%C2%97%C3%90%C2%BD%C3%91%C2%96%C3%90%C2%BC%C3%90%C2%BE%C3%90%C2%BA%20%C3%90%C2%B5%C3%90%C2%BA%C3%91%C2%80%C3%90%C2%B0%C3%90%C2%BD%C3%90%C2%B0%202023-11-06%20132604.png.png",
        header: "each child issues",
        text: "looks like I messed up with my state.during new post addition.so it coudnt see new posts ID...fixed",
        createdAt: "2023-11-06T11:27:53.423Z",
        updatedAt: "2023-11-06T11:27:53.423Z",
      },
      {
        _id: "65479c17cf01b9df93d9e3ef",
        user: "653e589925dac0dfac2f4079",
        imgURL:
          "https://res.cloudinary.com/dzgfcpkyi/image/upload/v1699191829/posts/%D0%97%D0%BD%D1%96%D0%BC%D0%BE%D0%BA%20%D0%B5%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202023-11-05%20154244.png.png",
        header: "Postman",
        text: "this is how I add post now...add post feature is in progress",
        createdAt: "2023-11-05T13:43:51.333Z",
        updatedAt: "2023-11-05T13:43:51.333Z",
      },
    ],
    isRefreshing: false,
    error: null,
    postOfUser: [],
  },
};
