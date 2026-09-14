import { useEffect } from "react";
import { useTranslation, Trans } from "react-i18next";
import Container from "../../components/Container";
import GenericHtml from "../../components/GenericHtml";
import Heading from "../../components/Heading";
import RouterLink from "../../components/RouterLink";
import MainTemplate from "../../templates/MainTemplate";

function AboutPomodoro() {
  const { t } = useTranslation();
  useEffect(() => {
    document.title = t("about.title");
  }, [t]);

  return (
    <MainTemplate>
      <Container>
        <GenericHtml>
          <Heading>{t("about.heading")}</Heading>

          <p dangerouslySetInnerHTML={{ __html: t("about.p1") }} />

          {/* <img src="https://placehold.co/1920x1080" alt="" /> */}

          <h2>{t("about.howItWorks")}</h2>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t("about.step1") }} />
            <li dangerouslySetInnerHTML={{ __html: t("about.step2") }} />
            <li dangerouslySetInnerHTML={{ __html: t("about.step3") }} />
            <li dangerouslySetInnerHTML={{ __html: t("about.step4") }} />
          </ul>

          <h2 dangerouslySetInnerHTML={{ __html: t("about.differential") }} />

          <p>{t("about.differentialP")}</p>

          <h3>{t("about.customTime")}</h3>
          <p>
            <Trans
              i18nKey="about.customTimeP"
              components={{ link: <RouterLink href="/settings/">link</RouterLink> }}
            />
          </p>

          <h3>{t("about.cyclesTitle")}</h3>
          <p>{t("about.cyclesP")}</p>
          <p>
            <strong>{t("about.ourPattern")}</strong>
          </p>
          <ul>
            <li dangerouslySetInnerHTML={{ __html: t("about.odd") }} />
            <li dangerouslySetInnerHTML={{ __html: t("about.even") }} />
            <li dangerouslySetInnerHTML={{ __html: t("about.cycle8") }} />
          </ul>

          <h3>{t("about.visualization")}</h3>
          <p>{t("about.visualizationP")}</p>
          <ul>
            <li>{t("about.yellow")}</li>
            <li>{t("about.green")}</li>
            <li>{t("about.blue")}</li>
          </ul>

          <p>{t("about.visualizationP2")}</p>

          <h3>{t("about.historyAuto")}</h3>
          <p>
            <Trans
              i18nKey="about.historyAutoP"
              components={{ link: <RouterLink href="/history">history</RouterLink> }}
            />
          </p>

          <h2>{t("about.why")}</h2>
          <ul>
            <li>{t("about.why1")}</li>
            <li>{t("about.why2")}</li>
            <li>{t("about.why3")}</li>
            <li>{t("about.why4")}</li>
          </ul>

          <p>
            <Trans
              i18nKey="about.ready"
              components={{ link: <RouterLink href="/">link</RouterLink> }}
            />
          </p>

          <p>
            <em>{t("about.quote")}</em>
          </p>
        </GenericHtml>
      </Container>
    </MainTemplate>
  );
}

export default AboutPomodoro;
