import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2>Home</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum,
        laboriosam ratione? Harum hic natus incidunt maxime, doloribus adipisci
        doloremque autem.
      </p>

      <Button size="lg" variant="destructive">Click me</Button>
    </Container>
  );
};

export default Home;
