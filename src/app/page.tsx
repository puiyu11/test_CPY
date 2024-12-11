// task 3.1: complete the getUsers() function to retrieve the data from API 
// API URL = "http://8.217.230.232/users"
"use client";

import User from "@/interfaces/user"
import Card from "@/components/card"
import axios from "axios";
import React, { useEffect, useState } from "react";
// import { getUsers } from "@/utils/getUsers";


async function getUsers(){
  const API_URL = "http://8.217.230.232/users";
  try {
    const response = await axios.get(API_URL);  // Fetch data from API
    return response.data;  // Return the users data from API
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];  // Return an empty array in case of an error
  }
  //return users;
}

// task 3.2: handle the data and show it in card view correctly
export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log(data); // Log the data to the console
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <main className="m-4">
        <div className="grid grid-cols-4 gap-2">
          {/*Card*/}
          {users.map((user) => (
            <Card key={user.id} user={user} /> // Render a Card for each user
          ))}
        </div>
      </main>
    </>
  );
}
