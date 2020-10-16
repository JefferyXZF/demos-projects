import React, { Fragment } from 'react'; 

function ListItem({ item }) {
  return(<Fragment>
    <dt>{item.term}</dt>
    <dt>{item.description}</dt>
  </Fragment>)
}

function Glossary(props) {
  return (
    // <dl>
    //   {props.items.map(item => (
    //     <ListItem item={item} key={item.id} />
    //   ))}
    // </dl>
    <h1>Hello the world</h1>
  )
}

export default Glossary