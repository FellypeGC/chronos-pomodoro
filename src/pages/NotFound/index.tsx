import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/Container";
import GenericHtml from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import RouterLink from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

function NotFound() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("notFound.title");
  }, [t]);
  
  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>{t("notFound.heading")}</Heading>

          <p>{t("notFound.p1")}</p>
          <p>
            {t("notFound.p2a")}{" "}
            <RouterLink href="/">{t("notFound.homeLink")}</RouterLink>{" "}
            {t("notFound.p2b")}{" "}
            <RouterLink href="/history">{t("notFound.historyLink")}</RouterLink>{" "}
            {t("notFound.p2c")}
          </p>
          <p>{t("notFound.p3")}</p>
          <p>{t("notFound.p4")}</p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

export default NotFound;
