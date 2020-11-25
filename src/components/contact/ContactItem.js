import React from "react";

export default function ContactItem() {
  return (
    <div class="card mb-3">
      <div class="card-body  gba-grey-slight">
        <h4 class="card-title text-left">
          <a>AYOUB</a>
        </h4>
        <p class="card-text text-left ">
          <i class="fas fa-envelope"></i> ayoub@gmail.com
        </p>
        <p class="card-text  text-left">
          <i class="fas fa-envelope"></i> 0622136532
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
