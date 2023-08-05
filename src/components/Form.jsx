import React from "react";
import { useState } from "react";
import styled from "styled-components";


const Header = styled.div`
  // color: #535bf2;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
const H1 = styled.h1`
font-size: 140px;
text-shadow: 5px 5px 10px #646cff;
`
const Input = styled.input`
padding: 5px;
border: none;
border-radius: 40px;
`
const Button = styled.input`
padding: 5px;
border: none;
border-radius: 50px;
box-shadow: 0 0 5px #646cff;
cursor: pointer;
`

function Form({ movieSearch }) {
  const [form, setForm] = useState({ // state to hold the data of the form
    searchTerm: "" // initial value of the search term
  })

  const handleChange = (e) => { // e accepts an event ON handles
    console.log(e.target.value)
    setForm({
      ...form,
      searchTerm: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default behavior of refreshing the page
    movieSearch(form.searchTerm);  //. notation to reach the object searchTerm in the function
    form.searchTerm= "";
  }

  return (
    <Header>
      <H1>Movies</H1>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search" value={form.searchTerm} onChange={handleChange} />
        <Button type="submit" value="Submit" />
      </form>
    </Header>
  )
}

export default Form;
