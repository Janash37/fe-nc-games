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

export const getReviewsByCategory = (category) => {
  return api
    .get(`/reviews?category=${category}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.reviews;
    });
};

export const getReviewById = (review_id) => {
  return api
    .get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.review[0];
    });
};

export const getReviewComments = (review_id) => {
  return api
    .get(`/reviews/${review_id}/comments`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.comments;
    });
};
