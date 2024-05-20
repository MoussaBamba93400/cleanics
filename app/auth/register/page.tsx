import { get } from "http";


const getErrorMessage = () => {
    throw new Error('Not implemented');
}

const fetchTest = async () => {
    console.log('fetchTest');
    try {
        const response = await fetch('http://localhost:3000/api/', {
            method: 'GET',
        });
      ;


       if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const text = await response.text(); // Read the response body as text
      console.log(text);
      return text;

    } catch (error) {
        console.error('Error:', error); // Log the actual error
    }
}

export default function RegisterPage() {

   
fetchTest();


    return (
        <div>
            <h1>Register Page</h1>
        </div>
    )
}