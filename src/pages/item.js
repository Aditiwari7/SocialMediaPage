import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const ItemDetail = () => {
  const { id } = useParams();
  const { loading, error, items } = useSelector((state) => state);
  
  console.log(id, items);
  const item = items.find((item) => item.id === Number(id));


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {title, body, userId} = item || {};

  return (
    <div>
      {item && (
        <div className='item-detail'>
          <h2>Details Page For Post With ID : {item.id}</h2>
          <img src={`https://picsum.photos/200?random=${item.id}`} alt={item.id}></img>
          <p>User id : {userId}</p>
          <p>Title : {title}</p>
          <p>Body: {body}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;