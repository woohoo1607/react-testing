import React from "react";
import {
  fade,
  makeStyles,
  withStyles,
  createStyles,
} from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";

export const StyledTreeItem = withStyles((theme) =>
  createStyles({
    iconContainer: {
      "& .close": {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px solid ${fade(theme.palette.text.primary, 0.4)}`,
    },
    root: {
      position: "relative",
      "&:after": {
        content: "''",
        position: "absolute",
        left: 7,
        width: 19,
        top: 42,
        borderBottom: `1px solid ${fade(theme.palette.text.primary, 0.4)}`,
      },
      "&:last-child": {
        "&:before": {
          content: "''",
          position: "absolute",
          left: 0,
          width: 9,
          top: 42,
          bottom: 0,
          backgroundColor: "#fff",
        },
        "&:after": {
          content: "''",
          position: "absolute",
          left: 7,
          width: 19,
          top: 42,
          borderBottom: `1px solid ${fade(theme.palette.text.primary, 0.4)}`,
        },
      },
    },
  })
)((props) => <TreeItem {...props} />);

export const useStyles = makeStyles(
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
      "&>li": {
        "&:before": { display: "none" },
        "&:after": { display: "none" },
        "&>ul": {
          border: "none",
          margin: 0,
          padding: 0,
        },
      },
    },
    cardContainer: {
      paddingTop: 10,
    },
  })
);
