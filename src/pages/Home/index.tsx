import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import CountDown from "../../components/CountDown";
import MainForm from "../../components/MainForm";
import MainTemplate from "../../templates/MainTemplate";

function Home() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("home.title");
  }, [t]);
  
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
