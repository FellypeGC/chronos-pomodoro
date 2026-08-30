import { useEffect } from "react";
import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import MainTemplate from "../../templates/MainTemplate";

function Home() {
  useEffect(() => {
    document.title = "Home - Chornos Pomodoro";
  }, []);
  
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

export default Home;
