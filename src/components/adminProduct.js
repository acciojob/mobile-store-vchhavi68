import React from "react";
import { useParams } from "react-router-dom";

const AdminProdcut = () => {
  const { id } = useParams();

  return (
    <div>
      <p>Product {id}</p>
      <input name="title" id="title" />

      <button data-testid="delete-btn">Delete</button>
      <button data-testid="update-btn">Save</button>
    </div>
  );
};

export default AdminProdcut;
