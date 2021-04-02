import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
const AddBook = () => {
  const [bookImageUrl,setBookImageUrl]=useState(null)

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
      const bookInfo ={
          bookName: data.bookName,
          authorName:data.authorName,
          imageUrl:bookImageUrl,
          price:data.bookPrice
      }

      fetch('http://localhost:5000/addBook',{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(bookInfo)
      })
  };

  const handleBookImage = (e)=>{
      const bookImage = new FormData();
      bookImage.set('key','d9df22459998db9719f423a928f646a7')
      bookImage.append('image',e.target.files[0])
      console.log(e.target.files[0])
      console.log(bookImage)
      axios.post('https://api.imgbb.com/1/upload',bookImage)
      .then(function (response) {
        setBookImageUrl(response.data.data.display_url);
        console.log(response.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  console.log(bookImageUrl)
  return (
    <form className="p-5 bg-secondary" onSubmit={handleSubmit(onSubmit)}>

      <input name="bookName" className="form-control m-1" type="text" placeholder="Book Name" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input name="authorName" className="form-control m-1" type="text" placeholder="Author Name" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input name="bookPrice" className="form-control m-1" type="text" placeholder="Book Price" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input name="bookImage" onChange={handleBookImage}  className="form-control m-1 pb-4" type="file" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      

      <input type="submit" className="form-control m-1 btn-primary" />
    </form>
  );
};

export default AddBook;
