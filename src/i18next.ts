import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init(
    {
      supportedLngs: ["en"],
      lng: "en",
      resources: {
        en: {
          translation: {
            text: "Lorem ipsum"
          }
        }
      },
      react: {
        useSuspense: true
      }
    },
    (error: string | undefined) => {
      //console.error(error);
    }
  )
  .then();
