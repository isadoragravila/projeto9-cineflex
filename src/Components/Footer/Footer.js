export default function Footer({ title, img }) {
    return (
      <div>
        <footer>
          <div className="filme">
            <img src={img} alt={title} />
          </div>
          <div>
            <p>{title}</p>
            <p></p>
          </div>
        </footer>
      </div>
    );
  }