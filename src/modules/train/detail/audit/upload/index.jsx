import React from "react";
import { Box, Button, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AddIcon from "@mui/icons-material/Add";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import "./index.scss";

import { ajax } from "request/index";
import { NoticeRef } from "utils/Notice";
import { LoadingRef } from "utils/Loading";

//
const Upload = (props) => {
  const {
    width = 160,
    height = 160,
    id,
    list,
    setList,
    uploadUrl,
    deleteUrl,
    add = false,
    read,
  } = props;
  // 选择图片
  const onChange = (e, param) => {
    const files = e.target.files;
    const file = files[0];
    if (!file) return;
    const isOk = onBefore ? onBefore({ file, files }) : true;
    isOk && onSuccess && onSuccess({ file, files, param });
  };
  // 文件判断
  const onBefore = ({ file }) => {
    const { size, type } = file;
    const s = size / 1024 / 1024;
    if (s > 2) {
      NoticeRef.current.open({ message: "文件大小不能大于2MB", type: "error" });
      return;
    }
    const t = !/(image)/.test(type);
    if (t) {
      NoticeRef.current.open({ message: "请上传图片文件", type: "error" });
      return;
    }
    return true;
  };
  // 提交
  const onSuccess = async ({ file }) => {
    const { name } = file;
    LoadingRef.current.open();
    const { status } = await new Promise((r) => {
      if (!add) {
        ajax({
          url: `${deleteUrl}/${id}`,
          method: "delete",
        }).then((res) => {
          r(res);
        });
      } else {
        r({ status: 200 });
      }
    });
    if (status !== 200) {
      NoticeRef.current.open({
        message: "个人照片上传失败，请联系管理员！",
        type: "error",
      });
      LoadingRef.current.close();
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", add ? name : "个人照片");
    ajax({
      url: `${uploadUrl}/${id}`,
      method: "post",
      data: formData,
    })
      .then((res) => {
        const { status } = res;
        if (status === 200) {
          const fr = new FileReader();
          fr.readAsDataURL(file);
          fr.onload = (result) => {
            const base64 = result.currentTarget.result;
            if (add) {
              const l = list.length - 1;
              list[l] = { certificate: base64, certificateName: name };
              setList([...list]);
            } else {
              setList([{ certificate: base64, certificateName: "个人照片" }]);
            }
          };
          NoticeRef.current.open({
            message: "文件上传成功！",
          });
        }
      })
      .finally(() => {
        LoadingRef.current.close();
      });
  };

  const onAdd = () => {
    const l = list.length - 1;
    if (l > 0) {
      const { certificate } = list[list.length - 1];
      if (!certificate) {
        NoticeRef.current.open({
          message: "请先完成前一个文件的上传",
          type: "warning",
        });
        return;
      }
    }
    setList([...list, { certificate: "", certificateName: "" }]);
  };

  const onDelete = (el, index) => {
    const { id } = el;
    if (id) {
      LoadingRef.current.open();
      ajax({
        url: `${deleteUrl}/${id}`,
        method: "delete",
      })
        .then((res) => {
          const { status, msg } = res;
          if (status === 200) {
            let _list = JSON.parse(JSON.stringify(list));
            _list.splice(index, 1);
            setList(_list);

            NoticeRef.current.open({
              message: msg || "删除成功",
            });
          }
        })
        .finally(() => {
          LoadingRef.current.close();
        });
    } else {
      NoticeRef.current.open({
        message: "请刷新页面在删除文件",
        type: "warning",
      });
    }
  };
  // render
  return (
    <Box className="t-upload-list">
      {list?.map((el, index) => (
        <Box sx={{ width, margin: "6px" }} key={el.certificate}>
          <Box className="t-upload" sx={{ width: "100%", height }}>
            <Box className="t-upload-item">
              {el.certificate ? (
                <img className="t-photo" src={el.certificate} />
              ) : (
                <CloudUploadIcon sx={{ fontSize: 40 }} />
              )}
              {read ? null : (
                <input type="file" onChange={(e) => onChange(e, el)} />
              )}
              {add && el.certificate ? (
                <Button
                  className="t-btn-delete"
                  variant="contained"
                  color="error"
                  startIcon={<DeleteSweepIcon />}
                  onClick={(e) => onDelete(el, index)}
                >
                  删除
                </Button>
              ) : null}
            </Box>
          </Box>
          <Typography variant="subtitle1" align="center" sx={{ p: "6px 0" }}>
            {el.certificateName}
          </Typography>
        </Box>
      ))}
      {!list.length && read ? (
        <Typography variant="subtitle1" align="center">
          无上传文件
        </Typography>
      ) : null}
      {add && !read ? (
        <Box sx={{ width, margin: "6px" }}>
          <Box className="t-upload" sx={{ width: "100%", height }}>
            <Box className="t-upload-item">
              <Box sx={{ textAlign: "center" }} onClick={onAdd}>
                <AddIcon sx={{ fontSize: 40 }} />
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ lineHeight: 2 }}
                >
                  添加其他资料
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
};
export default Upload;
