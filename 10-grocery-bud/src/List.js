import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items}) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const {id, title} = item

        const handleEdit = () => {

        }
        const handleDelete = () => {

        }

        return <article key={id} className='grocery-item'>
          <p className='title'>{title}</p>
          <div className="btn-container">
            <button type='button' className="edit-btn" onClick={handleEdit}>
              <FaEdit />
            </button>
            <button type='button' className="delete-btn" onClick={handleDelete}>
              <FaTrash />
            </button>
          </div>
        </article>
      })}
    </div>
  )
}

export default List
