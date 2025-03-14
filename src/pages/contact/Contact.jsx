import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <h2 className="text-2xl font-bold mb-4">
        Bist du bereit, gemeinsam Großes zu schaffen? Lass uns deine Ideen in
        digitale Meisterwerke verwandeln – mit einer Mischung aus Kreativität,
        Vision und Teamwork, die alles andere als gewöhnlich ist!
      </h2>
      <div className="infoma">
        {" "}
        <div className="contactIndo">
          <h3>Contact Details</h3>
          <a href="mailto:tairou97-mouhamed@hotmail.com">
            tairou97-mouhamed@hotmail.com
          </a>
        </div>
        <div className="details">
          <h3>Business Details</h3>
          <p>Tairou Mouhamed</p>
          <p>Location: Germany</p>
        </div>
        <div className="social">
          <h3>Social</h3>
          <a
            href="https://www.linkedin.com/in/tairou-m-744955160/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
