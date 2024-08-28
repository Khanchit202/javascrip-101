import React from 'react'

function MyButton() {
    return (<button>Click me</button>)
  }

export default function Page() {
    const isLoggedIn = true;
    let content;
    const product = [
        {title: 'Product 1', desc: 'My dasc 1'},
        {title: 'Product 2', desc: 'My dasc 2'},
        {title: 'Product 3', desc: 'My dasc 3'},
        {title: 'Product 4', desc: 'My dasc 4'}
    ]

    if (isLoggedIn){
        content = <h1>You're logged in 1</h1>
    }else(
        content = <h1>Please login</h1>
    ) 

  return (

    <div>
        {content}

        {isLoggedIn ? <h1>You're logged in 2</h1> : <h1>Please login 2</h1>}

        {isLoggedIn && <h1>You're logged in 3</h1>}

        <ul>
            {product.map((item, index) => (
                <li key={index}>Title:{item.title} Desh: {item.desc}</li>
            ))}
        </ul>

    </div>

  );
}
