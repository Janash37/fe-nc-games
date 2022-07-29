import axios from "axios";

const api = axios.create({
  baseURL: "https://be-boardgames-api.herokuapp.com/api",
});

//CATEGORIES
export const getAllReviews = (searchParams, category) => {
  const sortQuery = searchParams.get("sort_by");
  const orderQuery = searchParams.get("order");

  return api
    .get(`/reviews`, {
      params: { sort_by: sortQuery, order: orderQuery, category: category },
    })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.reviews;
    });
};

// export const getReviewsByCategory = (category) => {
//   return api
//     .get(`/reviews?category=${category}`)
//     .then((response) => {
//       return response.data;
//     })
//     .then((data) => {
//       return data.reviews;
//     });
// };

export const getReviewById = (review_id) => {
  return api
    .get(`/reviews/${review_id}`)
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.review[0];
    })
    .catch((err) => {
      return Promise.reject(err);
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

export const updateReviewVotes = (review_id, votes) => {
  return api
    .patch(`/reviews/${review_id}`, { inc_votes: votes })
    .then((response) => {
      return response.data;
    })
    .then((data) => {
      return data.response.votes;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const addComment = (reviewID, comment) => {
  return api
    .post(`/reviews/${reviewID}/comments`, {
      username: "grumpy19",
      body: comment,
    })
    .then((response) => {
      return response.data.comment;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`).then((response) => {
    return response;
  });
};
