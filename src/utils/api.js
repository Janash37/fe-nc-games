import axios from "axios";

const api = axios.create({
  baseURL: "https://be-boardgames-api.herokuapp.com/api",
});

//CATEGORIES
export const getAllReviews = () => {
  return api
    .get(`/reviews`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.reviews;
    });
};

export const selectCategory = () => {
  return api.get(`/reviews`);
};
