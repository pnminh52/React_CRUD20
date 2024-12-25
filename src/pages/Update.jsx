import React, { useState } from "react";
import { useParams } from "react-router-dom";

const Update = ({ products, onUpdate }) => {
  const [inputValue, setInputValue] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };
  const { id } = useParams();
  const crtprd = products.find((item) => item.id == id);
  const UPDATE = (e) => {
    e.preventDefault();
    const updateData = { ...crtprd, ...inputValue };
    onUpdate(updateData);
  };
  return (
    <div>
      <form action="" onSubmit={UPDATE}>
        <input
          defaultValue={crtprd?.name}
          name="name"
          placeholder="name"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtprd?.des}
          name="des"
          placeholder="des"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtprd?.price}
          name="price"
          placeholder="price"
          onInput={onChange}
          type="text"
        />
        <input
          defaultValue={crtprd?.img}
          name="img"
          placeholder="img"
          onInput={onChange}
          type="text"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
