import React from "react";
import "./Home.css";
// import image from "../blob.svg";
function Home() {
  return (
    // <div className="home-content">
    //   <img src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80" alt="" />
    //   <h2>Welcome To My Blog !</h2>
    //   <h4>Read and Learn</h4>
    // </div>

    <div className="grid-container">
      <header>
        <h2 className="animate__animated animate__fadeInDown">Hi, welcome to my blog!</h2>
      </header>
      <div className="about animate__animated animate__fadeInUp">
        <h4>My writing focuses on topics like... </h4>
        <p>
          <ul>
            <li>Web development with React</li>
            <li>Styling tips</li>
            <li>And some random ideas </li>
          </ul>
          I write about how to put these ideas into practice in daily life.
        </p>{" "}
        <br />
        <p>
          Most of the concepts I write about aren’t my own. They are ideas I
          discover and build upon after many hours of reading and research.
        </p>
      </div>
      <div className="logo about animate__animated animate__fadeInRight">
        <img src="https://i.pinimg.com/564x/85/0c/bc/850cbc67ddce999b82fe41a494acf29d.jpg" alt="logo" />
      </div>
      <footer>
        Thanks for reading. <br /> <br />
        <a href="https://github.com/Ishan-1101">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyNCAyNCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTEwLjksMi4xYy00LjYsMC41LTguMyw0LjItOC44LDguN2MtMC41LDQuNywyLjIsOC45LDYuMywxMC41QzguNywyMS40LDksMjEuMiw5LDIwLjh2LTEuNmMwLDAtMC40LDAuMS0wLjksMC4xIGMtMS40LDAtMi0xLjItMi4xLTEuOWMtMC4xLTAuNC0wLjMtMC43LTAuNi0xQzUuMSwxNi4zLDUsMTYuMyw1LDE2LjJDNSwxNiw1LjMsMTYsNS40LDE2YzAuNiwwLDEuMSwwLjcsMS4zLDFjMC41LDAuOCwxLjEsMSwxLjQsMSBjMC40LDAsMC43LTAuMSwwLjktMC4yYzAuMS0wLjcsMC40LTEuNCwxLTEuOGMtMi4zLTAuNS00LTEuOC00LTRjMC0xLjEsMC41LTIuMiwxLjItM0M3LjEsOC44LDcsOC4zLDcsNy42QzcsNy4yLDcsNi42LDcuMyw2IGMwLDAsMS40LDAsMi44LDEuM0MxMC42LDcuMSwxMS4zLDcsMTIsN3MxLjQsMC4xLDIsMC4zQzE1LjMsNiwxNi44LDYsMTYuOCw2QzE3LDYuNiwxNyw3LjIsMTcsNy42YzAsMC44LTAuMSwxLjItMC4yLDEuNCBjMC43LDAuOCwxLjIsMS44LDEuMiwzYzAsMi4yLTEuNywzLjUtNCw0YzAuNiwwLjUsMSwxLjQsMSwyLjN2Mi42YzAsMC4zLDAuMywwLjYsMC43LDAuNWMzLjctMS41LDYuMy01LjEsNi4zLTkuMyBDMjIsNi4xLDE2LjksMS40LDEwLjksMi4xeiI+PC9wYXRoPjwvc3ZnPg=="
          />
        </a>
        <a href="https://www.linkedin.com/in/ishan-sharma-982618218/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BQDNy%2FjkmQoCNSR%2Bpa1%2BMMQ%3D%3D">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAzMCAzMCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij4gICAgPHBhdGggZD0iTTE1LDNDOC4zNzMsMywzLDguMzczLDMsMTVjMCw2LjYyNyw1LjM3MywxMiwxMiwxMnMxMi01LjM3MywxMi0xMkMyNyw4LjM3MywyMS42MjcsMywxNSwzeiBNMTAuNDk2LDguNDAzIGMwLjg0MiwwLDEuNDAzLDAuNTYxLDEuNDAzLDEuMzA5YzAsMC43NDgtMC41NjEsMS4zMDktMS40OTYsMS4zMDlDOS41NjEsMTEuMDIyLDksMTAuNDYsOSw5LjcxMkM5LDguOTY0LDkuNTYxLDguNDAzLDEwLjQ5Niw4LjQwM3ogTTEyLDIwSDl2LThoM1YyMHogTTIyLDIwaC0yLjgyNHYtNC4zNzJjMC0xLjIwOS0wLjc1My0xLjQ4OC0xLjAzNS0xLjQ4OHMtMS4yMjQsMC4xODYtMS4yMjQsMS40ODhjMCwwLjE4NiwwLDQuMzcyLDAsNC4zNzJIMTR2LTggaDIuOTE4djEuMTE2QzE3LjI5NCwxMi40NjUsMTguMDQ3LDEyLDE5LjQ1OSwxMkMyMC44NzEsMTIsMjIsMTMuMTE2LDIyLDE1LjYyOFYyMHoiPjwvcGF0aD48L3N2Zz4="
          />
        </a>
      </footer>
    </div>
  );
}

export default Home;
