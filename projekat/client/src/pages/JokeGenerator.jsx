import { Container, Wrapper } from "../assets/styles"; // Import styled components Container and Wrapper
import JokeGeneratorGUI from "../components/JokeGenerator/JokeGeneratorGUI"; // Import CalmGameGUI component

export default function CalmGame() {
  return (
    <>
      <Container> {/* Wraps the page content in the Container component for styling */}
        <Wrapper> {/* Wraps the content in the Wrapper component for additional styling */}
          <JokeGeneratorGUI /> {/* Renders the CalmGameGUI component */}
        </Wrapper>
      </Container>
    </>
  );
}