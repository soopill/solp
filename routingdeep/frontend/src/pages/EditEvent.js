import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEventPage() {
  const data = useLoaderData("event-detail");

  return <EventForm event={data.event} />;
}
export default EditEventPage;
