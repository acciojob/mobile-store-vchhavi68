import React from "react";
import products from "../constants/products";
import { Link } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h1>Admin Panel</h1>

      {products.map((item) => (
        <div key={item.id}>
          <Link to={`/admin/products/${item.id}`}>
            {item.name} - {item.price}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Admin;
