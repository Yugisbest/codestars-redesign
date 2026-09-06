// import { Link } from "react-router-dom";

// function NotFound() {
//   return (
//     <main className="not-found-page">
//       <p>// ERROR 404</p>

//       <h1>
//         Page not
//         <br />
//         <span>found.</span>
//       </h1>

//       <p className="page-description">
//         Looks like you've reached a route that doesn't exist.
//       </p>

//       <Link to="/" className="primary-button">
//         Back to Home →
//       </Link>
//     </main>
//   );
// }

// export default NotFound;

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found-page">
      <p className="not-found-code">// ERROR 404</p>

      <h1>
        Page not
        <br />
        <span>found.</span>
      </h1>

      <p className="page-description">
        The route you're looking for doesn't exist.
      </p>

      <Link to="/" className="primary-button">
        ← Back to Home
      </Link>
    </main>
  );
}

export default NotFound;