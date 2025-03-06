# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

 ## CORS Configuration for React Frontend ###
   In the **`Program.cs`** file of the backend, there is a CORS policy that allows requests from your frontend application. By default, this policy is configured for `http://localhost:3000`:

   ```csharp
   builder.WithOrigins("http://localhost:3000")  // Default React app URL
