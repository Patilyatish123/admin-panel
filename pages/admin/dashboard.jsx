import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { fetchUsers } from "@/utils/api";
import { clearToken, getToken } from "@/utils/auth";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const router = useRouter();

  useEffect(() => {
    const token = getToken();

    if (!token) {
      alert("No token found or token expired");
      router.push("/admin/login");
      return;
    }

    fetchUsers(token)
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.error("Invalid token or session expired", err);
        alert("Session expired, please log in again");
        clearToken();
        router.push("/admin/login");
      });
  }, []);

  const handleLogout = () => {
    clearToken();
    router.push("/admin/login");
  };

  // Pagination 
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(users.length / usersPerPage);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 sm:p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 text-center sm:text-left">
            User List
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition duration-200 w-full sm:w-auto"
          >
            Logout
          </button>
        </div>

        {/* Users List */}
        <ul className="space-y-2">
          {currentUsers.map((user) => (
            <li
              key={user.id}
              className="border border-blue-200 bg-blue-50 rounded-md p-4 cursor-pointer hover:bg-blue-100 transition"
              onClick={() => router.push(`/admin/users/${user.id}`)}
            >
              <p className="text-base sm:text-lg font-medium">Name: {user.name}</p>
              <p className="text-sm sm:text-base text-gray-600">Email: {user.email}</p>
            </li>
          ))}
        </ul>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-6 gap-2 flex-wrap">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
