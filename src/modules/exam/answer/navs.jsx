import * as React from "react";
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
const Navs = ({ paper, answer, setCurrentQuestion }) => {
  console.log(paper, setCurrentQuestion);
  const create = (data) => {
    return data.map((el) => (
      <TreeItem
        nodeId={el.value + ""}
        label={
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: "3px 0",
            }}
          >
            <Typography>{el.no ? `第${el.no}题` : el.label}</Typography>
            {answer[el.questionId] ? (
              <Chip
                label={"已作答"}
                variant="outlined"
                color="primary"
                size="small"
              />
            ) : null}
          </Box>
        }
        id="value"
        sx={{
          "& .MuiTreeItem-label": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          },
        }}
        key={el.value}
      >
        {el.children ? create(el.children) : null}
      </TreeItem>
    ));
  };
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ height: "calc(100vh - 100px)", overflow: "auto" }}
      >
        <CardContent>
          <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            onNodeSelect={setCurrentQuestion}
          >
            {create(paper)}
          </TreeView>
        </CardContent>
      </Card>
    </Box>
  );
};
export default Navs;
