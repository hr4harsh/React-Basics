import React from "react";

// class Navbar extends React.Component {
//   render() {
//     return (
//         <nav className="navbar navbar-light bg-light">
//           <p className="navbar-brand" >
//             Navbar <span className=" btn btn-secondary m-2">{this.props.totalCounter}</span>

//           </p>
//         </nav>
//     );
//   }
// }

// export default Navbar;

// stateless functional components
const Navbar = ({totalCounter}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <p className="navbar-brand">
        Navbar
        <span className=" btn btn-secondary m-2">
            {totalCounter}
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
