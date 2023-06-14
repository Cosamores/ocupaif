import { useRouter } from 'next/router';
import DetalhesEvento from '../../components/DetalhesEvento';
import { getEventData } from '../../lib/api'; // This should be your function to fetch event data

const EventoPage = ({ event }) => {
  // This can be your component to show event details.
  return <DetalhesEvento {...event} />;
};

export async function getServerSideProps(context) {
  const { slug } = context.params;
  const event = await getEventData(slug); // Fetch event data here

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event }, // will be passed to the page component as props
  };
}

export default EventoPage;
