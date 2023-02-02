import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contactCard">
        <h1>CONTACT</h1>
        <div className="contactDesc">
          <p>
            I would love to hear from you! <br /> If you have any questions or
            comments, let me know!
          </p>
          <h3>pyongho0306@gmail.com</h3>
          <div>
            <a href="mailto:pyongho0306@gmail.com">
              <img src="./contacts.png" alt="contactImage" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
