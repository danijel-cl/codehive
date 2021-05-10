import React, {useState, useCallback} from 'react';
import ReactDOM from 'react-dom';
import { useFormContext } from 'react-hook-form';
import {http} from "../../../api/http"

const EditTable = (props) => {

  const {states, setStates, index, setIndex, header, title} = props

  const remove = (e, index) => {
    e.preventDefault()
    setStates(states.filter((state, i) => i !== index))
  }

  const edit = (e, index) => {
    e.preventDefault()
    setIndex(index)
  }
  return (
    <>
      <div className="row col-12 pb-5">
        <h4 className="col-2 font-size-7 font-weight-semibold mb-6 pl-0">{header}</h4>
        <div className="col-2">
          { index===-1 ? (
            <button type="button"
              onClick={() => {
                setIndex(states.length||0)
              }}
              className="btn btn-primary text-uppercase">
              <span className="mr-5 d-inline-block">+</span>
              Add Task
            </button>
          ) : (
            <button type="button"
              onClick={() => {
                setIndex(-1)
              }}
              className="btn btn-primary text-uppercase">
              <span className="mr-5 d-inline-block">-</span>
              Cancel Task
            </button>
          )
          }
        </div>
      </div>
      { states.length !== 0 && index===-1 &&
        <table className="table table-striped col-12">
          <thead style={{backgroundColor:"rgba(0, 176, 116, 0.7)"}} className="font-size-4 text-white">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {states.map((state, index) => {
              return (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{state[title]}</td>
                  <td><button onClick={(e) => edit(e, index)} className="text-green font-weight-semibold">EDIT</button></td>
                  <td><button onClick={(e) => remove(e, index)} className="text-red font-weight-semibold">REMOVE</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </>
  );
}

export default EditTable;
