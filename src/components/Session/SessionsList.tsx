import SessionItem from "./SessionItem";

type SessionsListProps = {
  sessions: {
    id: string;
    image: string;
    summary: string;
    title: string;
  }[];
};

export default function SessionsList({ sessions }: SessionsListProps) {
  return (
    <ul id="sessions-list">
      {sessions.map((session) => (
        <li className="session-item" key={session.id}>
          <SessionItem {...session} />
        </li>
      ))}
    </ul>
  );
}
