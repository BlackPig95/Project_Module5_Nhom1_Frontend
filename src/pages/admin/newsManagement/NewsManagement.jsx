import React, { useState, useEffect } from "react";
import {
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNews,
  fetchAllNews,
} from "../../../services/adminServices/newsServices";
import { LOAD_STATUS } from "../../../constants";
import FormAddNews from "../../../components/adminComponents/news/FormAddNews";
import FormEditNews from "../../../components/adminComponents/news/FormEditNews";

export default function NewsManagement() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.news);
  const [page, setPage] = useState(1);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  useEffect(() => {
    dispatch(fetchAllNews({ page }));
  }, [dispatch, page]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handleShowAddForm = () => {
    setShowAddForm(!showAddForm);
  };

  const handleShowEditForm = (news) => {
    setSelectedNews(news);
    setShowEditForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Xóa nhé?")) {
      dispatch(deleteNews(id)).then(() => {
        dispatch(fetchAllNews({ page }));
      });
    }
  };

  const handleFormSuccess = () => {
    dispatch(fetchAllNews({ page }));
  };

  return (
    <main className="ra-listuser">
      <h1 className="text-[30px]">List News</h1>
      <Button variant="contained" onClick={handleShowAddForm}>
        {showAddForm ? "Đóng Form" : "Thêm News"}
      </Button>
      {showAddForm && (
        <FormAddNews
          onSuccess={handleFormSuccess}
          onClose={handleShowAddForm}
        />
      )}
      {showEditForm && selectedNews && (
        <FormEditNews
          news={selectedNews}
          onSuccess={() => {
            handleFormSuccess();
            setShowEditForm(false);
          }}
          onClose={() => setShowEditForm(false)}
        />
      )}
      {error && <p>{error}</p>}
      {loading === LOAD_STATUS.FULLFILLED ? (
        <>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-pink-500">
                <TableRow>
                  <TableCell align="center">STT</TableCell>
                  <TableCell align="center">Nội dung</TableCell>
                  <TableCell align="center">Tiêu đề</TableCell>
                  <TableCell align="center">Ngày tạo</TableCell>
                  <TableCell align="center">Ngày sửa</TableCell>
                  <TableCell align="center">ImageUrl</TableCell>
                  <TableCell align="center">Chức năng</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.content?.map((news, index) => (
                  <TableRow key={news.id}>
                    <TableCell align="center">
                      {data && data.size * (page - 1) + index + 1}
                    </TableCell>
                    <TableCell align="center">{news.content}</TableCell>
                    <TableCell align="center">{news.title}</TableCell>
                    <TableCell align="center">
                      {new Date(news.createdAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(news.updatedAt).toLocaleDateString()}
                    </TableCell>
                    <TableCell align="center">
                      <img src={news.imageUrl} alt="news" width="100" />
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        onClick={() => handleShowEditForm(news)}
                      >
                        Chỉnh sửa
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => handleDelete(news.id)}
                      >
                        Xóa
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Pagination
            count={data.totalPages}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </>
      ) : (
        <CircularProgress />
      )}
    </main>
  );
}
