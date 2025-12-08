// // client/src/utils/api.js
// const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

// export async function post(path, body, token=null) {
//   const res = await fetch(`${API_BASE}${path}`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       ...(token ? { Authorization: `Bearer ${token}` } : {})
//     },
//     body: JSON.stringify(body)
//   });
//   return res.json();
// }

// export async function get(path) {
//   const res = await fetch(`${API_BASE}${path}`);
//   return res.json();
// }


// Api.js
export const post = async (url, body) => {
  const res = await fetch("http://localhost:5000" + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
};
