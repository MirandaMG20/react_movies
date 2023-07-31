import React from "react";
import { useState } from "react";
import styled from "styled-components";


const Header = styled.div`
  font-size: 3em;
  color: #535bf2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Input = styled.input`
border: none;
border-radius: 50px;
`

const Button = styled.input`
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
  }

  return (
    <Header>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search Movies" value={form.searchTerm} onChange={handleChange} />
        <Button type="submit" value="Submit" />
      </form>
    </Header>
  )
}

export default Form;
