import React from "react";
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import './Form.css';
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { addToTable } from './redux/action';
import { Link } from 'react-router-dom';
import {v1 as uuid} from "uuid"; 


export const UserForm = () => {
 

  const dispatch = useDispatch();
  const [Show, setShow] = useState(false);
  const [Data, setData] = useState([]);
  const [images, setImages] = useState('');
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
    watch,
    reset,
    trigger,
  } = useForm({
  });
  const convert2base64=(file)=>{
    const reader=new FileReader();
    reader.onloadend=()=>{
      setImages(reader.result.toString());
    };
    if(file){
      reader.readAsDataURL(file);
    }
    
  }
  const Name = watch("name");
  const Email = watch("email");
  const Phone = watch("phone");
  const Gender = watch("gender");
  const Category = watch("Category");
  const Technology = watch("chooseCb");
  const Picture = watch("Picture");
  const onSubmit = (data) => {
     console.warn('data in picture')
    if(data.Picture.length>0){
    convert2base64(data.Picture[0]);
    }
    setData(data);
    
  };

  const handlecreate = () => {

    dispatch(addToTable(Data))
    handleClose();
  }




  const handlePreview = () => {
    console.log("length: ", Object.keys(errors).length)
    if (Object.keys(errors).length === 0) {
      onSubmit();
      handleShow();
    }
  }
  const handlereset = () => {

    reset();
    handleClose();
  }
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to='/Assignment5/users/view' className="link navbar-brand">View Users</Link>
        </nav>
      </div>
      <div className="container mt-5 pt-5 ">
        <div className="row bg-info ">
          <h1 className="text-center mt-5 pt-5 text-secondary">Create user</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group my-3">
              <label htmlFor="name" className="align-left">
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is Required",
                  pattern: {
                    value: /^[a-zA-Z]+(\s[a-zA-Z]+)?$/,
                    message: "Only letters and space are allowed",
                  },
                  min: {
                    value: 2,
                    message: "Minimum length should be 2",
                  },
                  max: {
                    value: 30,
                    message: "Maximum length should be 30",
                  }
                })}
                onKeyUp={() => {
                  trigger("name");
                }}
                className={`form-control ${errors.name && "invalid"}`}
                id="name"
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </div>
            <div className={`form-group  flex my-3`}>
              <h6>Gender:</h6>{" "}
              <div className="form-check">
                <label htmlFor="male">
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    name="gender"
                    value="Male"
                    className="form-check-input"
                    id="male"
                  />{" "}
                  Male
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="Female">
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    name="gender"
                    value="Female"
                    className="form-check-input"
                    id="female"
                  />{" "}
                  Female
                </label>
              </div>
              <div className="form-check">
                <label htmlFor="other">
                  <input
                    {...register("gender", { required: true })}
                    type="radio"
                    name="gender"
                    value="Other"
                    className="form-check-input"
                    id="other"
                  />
                  Other
                </label>

              </div>
              {errors.gender?.type === "required" && (
                <small className="text-danger">
                  Please fill the required field
                </small>
              )}
            </div>
            <div className="form-group my-3">
              <label htmlFor="email" className="col-form-label">
                Email
              </label>
              <input
                type="text"
                id="email"
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", {
                  required: "Email is Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group my-3">
              <label className="col-form-label">Phone</label>
              <input
                type="text"
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", {
                  required: "Phone is Required",
                  pattern: {
                    value: /^(\+\d{1,3}[- ]?)?\d{10}$/,
                    message: "Invalid phone no",
                  },
                })}
                onKeyUp={() => {
                  trigger("phone");
                }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>
            <div className="form-group my-3">
              <label htmlFor="category">Category</label>{" "}
              <select
                className={`form-select`}
                id=" category"
                {...register("Category", { required: true })}
              >
                <option value="General">General</option>
                <option value="SC/ST">SC/ST</option>
                <option value="OBC">OBC</option>
                {errors.category?.type === "required" && (
                  <small className="text-danger">
                    Please fill the required field
                  </small>
                )}
              </select>
            </div>
            <div className="form-group flex my-3">
              <h6>Technology :</h6>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  value="C "
                  {...register("chooseCb", { required: true })}
                  className={`form-check-input `}
                />
                <label htmlFor="chooseCb" className="form-check-label">
                  C
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  value="C++ "
                  {...register("chooseCb", { required: true })}
                  className={`form-check-input `}
                />
                <label htmlFor="chooseCb" className="form-check-label">
                  C++
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  value="Java "
                  {...register("chooseCb", { required: true })}
                  className={`form-check-input`}
                />
                <label htmlFor="chooseCb" className="form-check-label">
                  Java
                </label>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  value="Python "
                  {...register("chooseCb", { required: true })}
                  className={"form-check-input"}
                />
                <label htmlFor="chooseCb" className="form-check-label">
                  Python
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  name="selectCheckbox"
                  id="selectCheckbox"
                  value="Javascript "
                  {...register("chooseCb", { required: true })}
                  className={"form-check-input"}
                />
                <label htmlFor="chooseCb" className="form-check-label">
                  Javascript
                </label>
              </div>
              {errors.chooseCb?.type === "required" && (
                <small className="text-danger">
                  Please fill the required field
                </small>
              )}
            </div>
            <div className="form-group my-3">
              <label htmlFor="Picture">Profile Picture</label>
              <input
                type="file"
                id="Picture"
                accept=".jpeg, .png, .jpg"
                {...register('Picture')}
               
              />
            </div>
            <Button variant="primary" type="submit" onClick={handlePreview}>
              Preview
            </Button>
            <Modal show={Show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>User details</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>{Name}</p>
                <p>{Gender}</p>
                <p>{Email}</p>
                <p>{Phone}</p>
                <p>{Category}</p>
                <p>{Technology}</p>
                <p>{Picture}</p>
                {images?<img src={images} width="150"/>:null}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handlereset}>
                  Reset
                </Button>
                <Button variant="primary" onClick={handlecreate}>
                  Create
                </Button>
              </Modal.Footer>
            </Modal>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
