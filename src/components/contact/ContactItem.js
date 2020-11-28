import React from "react";

export default function ContactItem({ contact }) {
  const { name, email, phone } = contact;
  return (
    <div class="card mb-3">
      <div class="card-body  gba-grey-slight">
        <h4 class="card-title text-left">
          <a>{name}</a>
        </h4>
        <p class="card-text text-left ">
          <i class="fas fa-envelope"></i> {email}
        </p>
        <p class="card-text  text-left">
          <i class="fas fa-envelope"></i> {phone}
        </p>

        <div className="text-left">
          <a href="#" class="btn btn-primary ml-auto">
            Edit
          </a>
          <a href="#" class="btn btn-danger text-left">
            Delete
          </a>
        </div>
      </div>
    </div>
  );
}
