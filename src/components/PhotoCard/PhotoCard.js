import { Card, CardMedia } from "@material-ui/core";
import useStyles from "./styles";
import openInNewTab from "../../utils/secureOpenNewTab";

export default function PhotoCard({ photo, source }) {
  const classes = useStyles();
  return (
    <Card onClick={openInNewTab(source)}>
      <CardMedia image={photo} style={{ height: "100%" }} />
    </Card>
  );
}
