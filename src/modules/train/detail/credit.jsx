import React from "react";
import { Box, Card, CardContent, Typography, Chip } from "@mui/material";

const TrainDetailCredit = ({ course }) => {
  const { courseTypeList = [] } = course;
  return (
    <Box>
      {courseTypeList?.map((el, i) => (
        <Card variant="outlined" key={i} sx={{ mt: 1 }}>
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              color="primary"
              sx={{ mb: 1 }}
            >
              {el.courseTypeName + " - " + el.levelName} - 已获得学时
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1, mb: 2 }}>
              线上【
              <span
                style={{
                  display: "inline-block",
                  padding: "0 6px",
                  color: "#2e7d32",
                  fontWeight: "blod",
                  fontSize: "20px",
                }}
              >
                {el.onlineCredit}
              </span>
              】小时, 线下【
              <span
                style={{
                  display: "inline-block",
                  padding: "0 6px",
                  color: "#2e7d32",
                  fontWeight: "blod",
                  fontSize: "20px",
                }}
              >
                {el.offlineCredit}
              </span>
              】小时
            </Typography>
            <Chip
              label={el.isComplete ? "已完成" : "未完成"}
              color={el.isComplete ? "success" : "default"}
              size="small"
            />
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default TrainDetailCredit;
