import { useState, useEffect } from 'react';

const useSearch = (data) => {
  const [keyWords, setKeyWords] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const results = data.filter(post =>
      post.title.toLowerCase().includes(keyWords) ||
      post.content.toLowerCase().includes(keyWords)
    );
    setFilteredPosts(results);
  }, [data, keyWords]);

  return [keyWords, setKeyWords, filteredPosts];
};

export default useSearch;
