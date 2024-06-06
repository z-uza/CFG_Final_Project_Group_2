// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// function WaitTimePage() {
//   const { id } = useParams(); // Get the parkID parameter from the URL
//   const [waitTime, setWaitTime] = useState(null);

//   useEffect(() => {
//     // Fetch wait time for the selected theme park
//     fetchWaitTime(id);
//   }, [id]);

//   const fetchWaitTime = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/getData?id=${id}`);

//       if (!response.ok) {
//         throw new Error('Failed to fetch wait time');
//       }
//       const data = await response.json();
//       setWaitTime(data);
//       console.log(data)
//     } catch (error) {
//       console.error('Error fetching wait time:', error.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Wait Time for {id}</h2>
//       {waitTime ? (
//         <p>Current ride wait times: {waitTime.wait_time} </p>
//       ) : (
//         <p>Loading wait time...</p>
//       )}
//     </div>
//   );
// }

// export default WaitTimePage;