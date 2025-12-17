import React from 'react'

export const ObjectLiteral = () => {
    interface Person {
        firstName: string;
        lastName: string; 
        age: number;
        address: Address;
    }

    interface Address {
        country: string;
        houseNo: string;
        street?: string;
    }

    const person: Person = {
        firstName: 'fernando',
        lastName: 'herrera',
        age: 38,
        address: {
            country: 'canada',
            houseNo: '342',
            street: '123'
        }
    }
  return (
    <>
        <h3>
            Objetos Literales
        </h3>
        <pre>
            { JSON.stringify(person, null, 2) }
        </pre>
    </>
  )
}
