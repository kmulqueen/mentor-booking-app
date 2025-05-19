import Button from "../UI/Button";

type SessionItemProps = {
  id: string;
  image: string;
  summary: string;
  title: string;
};

export default function SessionItem({
  id,
  image,
  summary,
  title,
}: SessionItemProps) {
  return (
    <article className="session-item">
      <img src={image} alt={`Image for session: ${title}`} />
      <div className="session-data">
        <div>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <div className="actions">
          <Button to={id}>Learn More</Button>
        </div>
      </div>
    </article>
  );
}
