import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PageLayout } from "../components/layouts";

function GameDetailsPage() {
  const { gameSlug } = useParams(); 

  useEffect(() => {

  }, [gameSlug])
  
  return (
    <PageLayout>
      <h1>{gameSlug}</h1>
    </PageLayout>
  );
}

export default GameDetailsPage;