import "./Home.css";

const Home = () => {
  return (
    <div className="mainContainer">
      <div className="infoContainer">
        <img
          src="https://media.licdn.com/dms/image/C5603AQGpjoopTdN3lQ/profile-displayphoto-shrink_800_800/0/1612428126745?e=1680739200&v=beta&t=ibltgJVe03quCf0bIwo28ny9ZNpPb5qbjDYJX97xwmg"
          alt=""
        />
        <div className="intro">
          <h1>
            Hello, I'm Yong Park!
          </h1>
          <h3>Software Engineer</h3>
        </div>
      </div>
      <div className="iconContainer">
        <img src="./about.png" alt="" />
        <img src="./contacts.png" alt="" />
        <img src="./layers.png" alt="" />
        <img src="./resume.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
