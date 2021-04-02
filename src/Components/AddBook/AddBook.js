import { CircularProgress, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddBook = () => {
  const [alert, setAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [Linear, setLinear] = useState(false);

  const [bookImageUrl, setBookImageUrl] = useState(null);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    setAlert(true);
    const date = new Date();
    const bookInfo = {
      bookName: data.bookName,
      authorName: data.authorName,
      imageUrl: bookImageUrl,
      price: data.bookPrice,
      date: date,
    };
    fetch("https://pacific-earth-93267.herokuapp.com/addBook", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookInfo),
    })
      .then((res) => res.json)
      .then((data) => {
        data && setAlert(false);
        data && setSuccessAlert(true);
      });
  };

  const handleBookImage = (e) => {
    setLinear(true);
    const bookImage = new FormData();
    bookImage.set("key", "d9df22459998db9719f423a928f646a7");
    bookImage.append("image", e.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", bookImage)
      .then(function (response) {
        setBookImageUrl(response.data.data.display_url);
        setLinear(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(bookImageUrl);
  return (
    <form className="p-5 bg-secondary" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="bookName"
        className="form-control m-1"
        type="text"
        placeholder="Book Name"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        name="authorName"
        className="form-control m-1"
        type="text"
        placeholder="Author Name"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        name="bookPrice"
        className="form-control m-1"
        type="text"
        placeholder="Book Price"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input
        name="bookImage"
        onChange={handleBookImage}
        className="form-control m-1 pb-4"
        type="file"
        ref={register({ required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      {Linear && <LinearProgress></LinearProgress>}
      <input type="submit" className="form-control m-1 btn-primary" />
      {alert && <LinearProgress className = "form-control m-1"></LinearProgress>}
      {successAlert && (
        <Alert className=" ml-1" variant="filled" severity="success">
          Your Book is Uploaded !!
        </Alert>
      )}
    </form>
  );
};

export default AddBook;
