import "./i18next";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

export default function App() {
  const { i18n } = useTranslation();

  const prevT = useRef(i18n.t);

  console.log(prevT.current === i18n.t);
  prevT.current = i18n.t;

  useEffect(() => {
    console.log("useEffect with i18n");
  }, [i18n]);

  return i18n.t("text");
}
