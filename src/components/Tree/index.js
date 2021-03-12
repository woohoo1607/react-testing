import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { StyledTreeItem, useStyles } from "./styled";
import items from "./items";

function getFlat({ id, children = [] }) {
  return [id].concat(...children.map(getFlat));
}

export const LeafCard = ({ item: { text } }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      <Card>
        <CardContent>
          <Typography>{text}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export const TreeLeaf = ({ item }) => {
  return (
    <StyledTreeItem nodeId={item.id}>
      <LeafCard item={item} />
      {item.children?.map((i) => (
        <TreeLeaf key={i.id} item={i} />
      ))}
    </StyledTreeItem>
  );
};

export default function CustomizedTreeView() {
  const classes = useStyles();

  return (
    <TreeView className={classes.root} expanded={getFlat(items)}>
      <TreeLeaf item={items} />
    </TreeView>
  );
}
