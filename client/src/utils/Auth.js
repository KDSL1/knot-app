export function login() {
  localStorage.setItem("knot-auth", "true");
}

export function logout() {
  localStorage.removeItem("knot-auth");
}

export function isAuthenticated() {
  return localStorage.getItem("knot-auth") === "true";
}
