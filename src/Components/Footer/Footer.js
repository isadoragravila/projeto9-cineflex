export default function Footer({ title, img, time, day }) {
    return (
      <div>
        <footer>
          <div className="filme">
            <img src={img} alt={title} />
          </div>
          <div>
            <p>{title}</p>
            {time ? <p>{`${day} - ${time}`}</p> : null}
          </div>
        </footer>
      </div>
    );
  }