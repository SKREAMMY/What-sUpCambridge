import React from "react";
import { useState, useEffect } from "react";

const World = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    console.log("inside world");

    async function fetchGlobalTopStories() {
      await fetch("http://localhost:5000/news/global/world")
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
        })
        .then((json) => {
          console.log("inside world component");
          // console.log("Top Stories ", json);
          setTopStories(json.data);
          console.log("top stories is ", topStories);
        });
    }

    fetchGlobalTopStories();
  }, []);

  return <div>World</div>;
};

export default World;
