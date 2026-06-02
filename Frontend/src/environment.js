// const server={
//         dev: "http://localhost:8000",
//         prod: "https://vido-jdkd.onrender.com"
// }

// export default server;
const server =
  import.meta.env.MODE === "production"
    ? "https://vido-jdkd.onrender.com"
    : "http://localhost:8000";

export default server;