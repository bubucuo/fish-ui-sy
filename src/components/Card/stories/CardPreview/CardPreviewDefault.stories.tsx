import { CardPreview } from "fish-ui-sy";

const resolveAsset = (asset: string) => {
  const ASSET_URL =
    "https://raw.githubusercontent.com/microsoft/fluentui/master/packages/react-components/react-card/stories/src/assets/";

  return `${ASSET_URL}${asset}`;
};

const Default = () => (
  <CardPreview
    logo={<img src={resolveAsset("docx.png")} alt="Microsoft Word logo" />}
  >
    <img
      src={resolveAsset("doc_template.png")}
      alt="Preview of a Word document "
    />
  </CardPreview>
);

export default Default;
