import React from "react";

export default function Comment({ name, email, body }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>{body}</p>
      <p>By: {email}</p>
    </div>
  );
}
