import Card from "./Card";


// props:
//   data: consists of data records to be rendered
const List = ({ data }) => (
  
  data ? (<div className="list">
    {data.records?.map((d, i) => <Card _id={d._id} index={i+1} count = {data.count} venue={d.venue} team1={d.team1} team2={d.team2} date={d.date} key={i}/>)}
   
    {/* Your code goes here */}
    {/* Render the Card with required props here */}
  </div>) : null
);


export default List;