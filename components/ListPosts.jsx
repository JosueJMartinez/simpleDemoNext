import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

export default function ListPosts({ posts }) {
  const router = useRouter();
  const errorHandling = () =>
    typeof posts === "string" ? <h1>"Error"</h1> : <ul>{list()}</ul>;

  const returnList = () => errorHandling();
  // console.log(errorHandling);
  const list = () =>
    posts.map(({ title, id, body }) => (
      <li key={uuidv4()}>
        <a
          onClick={() => {
            router.push(
              {
                pathname: `http://localhost:3000/post/[pid]`,
                query: { pid: id, title, body },
              },
              `http://localhost:3000/post/${id}`
            );
          }}
        >
          {title}
        </a>
      </li>
    ));

  return <> {returnList()}</>;
}
