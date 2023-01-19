import React, {createContext, useReducer, useEffect} from 'react';

const comments = () => {
  return (
      <>
       <form>
          <input
            type="email"
            className="form-control mb-4 p-4"
            placeholder="Enter Comment"
            required
          />

          <button
            type="submit"
            className="btn btn-block btn-primary"
          >
            Add Comment
          </button>
        </form>
      </>
  );
};

export default comments;
