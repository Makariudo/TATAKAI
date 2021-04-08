import { useEffect } from "react";
import Container from "@material-ui/core/Container";
import Modal from "../../ui/Modal";
import "../styles.css";

declare interface Props {
  getAuthMetamask: Function;
}
const Home = ({ getAuthMetamask }: Props) => {
  useEffect(() => {
    getAuthMetamask();
  }, []);

  return (
    <Container component="main" maxWidth="lg">
      <Modal />
      <div className="App">
        <h1>TAKAKAI - Welcome</h1>
      </div>
    </Container>
  );
};
export default Home;
