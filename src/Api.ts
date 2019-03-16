import store from "./Store";

const API_URL = `/api`;

const handleResponse = response => {
  if (!response.ok) {
    store.error = "Could not fetch";
  }
  store.setLoading(false);
  return response.json();
};

export const fetchFoodByName = (name: string) => {
  store.setLoading(true);
  return fetch(`${API_URL}?q=${name}`)
    .then(handleResponse)
    .catch(error => console.error(error));
};
