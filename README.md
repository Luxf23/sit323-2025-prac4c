# SIT323-4.2C Calculator Microservice - Enhanced Error Handling

This project enhances the basic calculator microservice from Task 4.1P by improving the error handling functionality. The goal is to provide more informative, user-friendly, and reliable error responses in scenarios such as missing query parameters, non-numeric inputs, and division by zero. By adding detailed error messages and validation checks, the microservice becomes more robust and user-friendly.

The application is built using Node.js and Express.js. To run the project, first install the dependencies by running `npm install`, then start the server using `node index.js`. Once the server is running, you can access the following endpoints through your browser or a tool like Postman:

- Addition: `http://localhost:3000/add?num1=10&num2=5`
- Subtraction: `http://localhost:3000/subtract?num1=10&num2=5`
- Multiplication: `http://localhost:3000/multiply?num1=10&num2=5`
- Division: `http://localhost:3000/divide?num1=10&num2=5`

The microservice includes comprehensive error handling. If you omit parameters, use non-numeric values, or attempt to divide by zero, the API will return a clear JSON error message. For example:
- `/add` returns: `"Missing query parameters. Please provide both num1 and num2."`
- `/add?num1=abc&num2=5` returns: `"Invalid input. num1 and num2 must be numbers."`
- `/divide?num1=10&num2=0` returns: `"Division by zero is not allowed."`

This enhanced version improves usability and robustness, ensuring a smooth experience for end users and developers alike.

Author: Luxf23  
GitHub Repository: https://github.com/Luxf23/sit323-2025-prac4c
