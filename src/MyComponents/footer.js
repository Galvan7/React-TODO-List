import React from 'react'

export const Footer = () => {
  let fstyle={
    // position: "relative",
    // // top: "93vh",
    // width: "100%"
  }
  return (
    <footer className="bg-dark text-light py-2" style={fstyle}>
      <p className="text-center">
      Copyright &copy; MyTodosList.com
      </p>
    </footer>
  )
}
