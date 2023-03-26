import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_RECIPE } from "../gql/query";
import { NEW_RECIPE } from "../gql/mutation";

export default function CreateRecipe() {
  const [title, setTitle] = useState('')
  const [ingradient, setIngradient] = useState('')
  const [createMutation] = useMutation(NEW_RECIPE, {
    refetchQueries: [
      {guery: GET_RECIPE},
    ]
  })

  const handleSubmit = e => {
    e.preventDefault()
    console.info('Creating new recipe...', title, ingradient)
    createMutation({
      variables: {
        title,
        ingradient: [...ingradient]
      }
    })
    console.log(`Recipe ${title} created with ingradients - (${ingradient})`);
    setTitle('')
    setIngradient('')
  }

  return <form onSubmit={e => handleSubmit(e)}>
    <div className='form-group'>
      <label htmlFor='title'>Title:</label>
      <input
        type='text'
        name='title'
        className='form-control'
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
    </div>
    <div className='form-group'>
      <label htmlFor='ingradient'>Ingradients:</label>
      <input
        type='text'
        name='ingradient'
        className='form-control'
        value={ingradient}
        onChange={e => setIngradient(e.target.value)}
      />
    </div>
    <input type='submit' value='create' className='btn btn-primary' />
  </form>
}