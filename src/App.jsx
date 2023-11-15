import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";
import Description from "./components/Description";
import product from "./product";

const firstName = prompt("Type your first name");

const App = () => {
  const Greeting = () =>
    firstName ? <p className="text-success fs-4">Hello, {firstName}!</p> : null;

  const ProductCard = () => (
    <Card
      style={{
        width: "18rem",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        background: "#f3e9d2", // Light yellow background
      }}
    >
      <Card.Img
        variant="top"
        src="https://cdn.britannica.com/90/94190-050-C0BA6A58/Cereal-crops-wheat-reproduction.jpg"
        style={{ borderRadius: "10px" }} // Rounded corners for the image
      />
    </Card>
  );

  return (
    <>
      <div className="container justify-content-center m-5">
        {!firstName && (
          <form>
            <p className="text-primary fs-4">
              Hello, there! (You can Provide Your Name Here)
            </p>
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Your Name"
            />
            <Button variant="success">Submit</Button>
          </form>
        )}
      </div>
      <div className="container justify-content-center">
        <Card
          style={{
            width: "18rem",
            margin: "20px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            background: "#f8ebc4", // Light brown background
          }}
        >
          <Image />
          <Card.Body>
            <Card.Title className="text-success">
              <Name />
            </Card.Title>
            <Card.Text className="text-dark">
              <Description />
            </Card.Text>
            <Button variant="warning">
              <Price />
            </Button>
          </Card.Body>
        </Card>

        <br />

        <Greeting />

        {firstName && <ProductCard />}
      </div>
    </>
  );
};

export default App;
