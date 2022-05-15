import React from "react";
import Card from "./Card";
import "./Blogs.css"

const Blogs = () => {
  return (
    <div className="blog-container">
      
      <Card
        imageUrl="https://images.unsplash.com/photo-1620662831351-9f68f76d0b9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="Takeaway-1"
        body=" Who was Solomon and what's this paradox? What's Hedonic Tredmill ?"
        blogurl="https://ishans.notion.site/Takeaway-1-a24376ee40ba4d49a94460b8d06f7ace"
      />
      <Card
        imageUrl="https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        title="React-Router"
        body="It is a library for routing which enables the navigation among various components."
        blogurl="https://ishans.notion.site/React-Router-f8c2f5fda4604978889465b60ec9ae4e"
      />
      
      <Card
        imageUrl="https://i0.wp.com/regroove.ca/wp-content/uploads/2018/07/react-redux-2.png?fit=2560%2C1440&ssl=1"
        title="Redux for Beginners"
        body="It is an open-source JavaScript library for managing and centralizing application state."
        blogurl="https://ishans.notion.site/Redux-ceef36ab99d345e3be396504aac5f22d"
      />
    </div>
  );
};

export default Blogs;