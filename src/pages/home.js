import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () =>{

    let navigate = useNavigate();

    const { loading, error, items } = useSelector((state) => {
        return state;
    });

      if (loading) {
        return <div>Loading...</div>; 
      }
    
      if (error) {
        return <div>Error: {error}</div>; // Display an error message if data fetching fails
      }
    
      return (
        <div className="items-container">
          {items && items.map((item) => (
            <div onClick={()=>navigate(`/item/${item.id}`)} className="items-content"  key={item.id}>
              <img src={`https://picsum.photos/200?random=${item.id}`} alt={`${item.id}`}></img>
              <div className="item-details">
                <p>User ID: {item.userId}</p>
                <p>Title : {item.title.slice(0,20)}......</p>
                <p>Body : {item.body.slice(0,50)}......</p>
                <p>Read More..</p>
              </div>
            </div>
          ))}
        </div>
      );

}

export default Home;