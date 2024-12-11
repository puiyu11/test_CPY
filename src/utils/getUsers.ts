// utils/getUsers.ts
import User from "@/interfaces/user"; // Ensure this path matches your project structure

// export const getUsers = async (): Promise<User[]> => {
//   try {
//     const response = await fetch("http://8.217.230.232/users"); // API URL
//     if (!response.ok) {
//       throw new Error("Failed to fetch users");
//     }
//     const data: User[] = await response.json(); // Parse the data as an array of User
//     return data;
//   } catch (error) {
//     console.error("Error fetching users:", error); // Log any error
//     return []; // Return an empty array in case of error
//   }
// };

export const getUsers = async (): Promise<User[]> => {
    // Mock data for testing
    return [
      { id: 1, name: "John Doe", age: 30, gender: "Male", remarks: "Test user" },
      { id: 2, name: "Jane Smith", age: 25, gender: "Female", remarks: "Another test user" }
    ];
  };
