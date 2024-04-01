// import "../stylesheets/index.css";
import "../stylesheets/App.css";
import "../stylesheets/AppMediaQueries.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Profile from "../components/Profile";
import About from "../components/About";
import Experience from "../components/Experience";
import Funfact from "../components/Funfact";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function RepoHome() {
  const [user, setUser] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showViewMore, setShowViewMore] = useState("");

  const fetchRepos = () => {
    fetch(
      `https://api.github.com/users/GiaHDuong/repos?per_page=6&page=${currentPage}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          setShowViewMore("End of Repos");
        } else {
          setUser([...user, ...data]);
          setShowViewMore("View More");
        }
      });
  };

  useEffect(() => {
    fetchRepos();
  }, [currentPage]);

  const viewMore = () => {
    setCurrentPage(currentPage + 1);
  };
  const userElements = user.map((userElement) => {
    return (
      <div className="repo-card" key={userElement.id}>
        <Link to={`/repodetails/${userElement.name}`}>
          <h2 className="repo-name">{userElement.name}</h2>
        </Link>
        <p className="language">
          Langauge:{" "}
          {userElement.language === null ? "none" : userElement.language}
        </p>
        <p className="date">Start date & time: {userElement.created_at}</p>
        <p className="visibility">Visibility: {userElement.visibility}</p>
      </div>
    );
  });

  return (
    <>
      <Profile />
      <About />
      <Experience />

      <section id="projects">
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">PROJECTS</h1>
        <section className="repo-container">{userElements}</section>
        <p className="view-more" onClick={viewMore}>
          {showViewMore}
        </p>
      </section>

      <Funfact />
      <Contact />
      <Footer />
    </>
  );
}

export default RepoHome;
