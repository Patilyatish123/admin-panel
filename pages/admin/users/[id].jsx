import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchUserById } from '@/utils/api';
import { clearToken, getToken } from '@/utils/auth';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState(null);


  //fetch user data on mount the component or id change
  useEffect(() => {
    const token = getToken(); 
    if (!token || !id) return;
    fetchUserById(id, token)
      .then((res) => setUser(res.data))
      .catch(() => {

        //if fetch fails, redirect to login page and clear th token
        clearToken();
        router.push('/admin/login');
      });
  }, [id]);


  //logout logic
  const handleLogout = () => {
    clearToken();
    router.push('/admin/login');
  };

  if (!user) return <p className="p-6">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 relative flex items-center justify-center">
      <div className="absolute top-10 right-12 flex space-x-3">
        <button
          onClick={() => router.push('/admin/dashboard')}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 shadow"
        >
          Dashboard
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg transition duration-200 shadow"
        >
          Logout
        </button>
      </div>
      <div className="flex justify-center items-center h-full pt-20">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">User Details</h2>
          <div className="space-y-4 text-gray-700">
            <p><span className="font-semibold text-gray-900">Name:</span> {user.name}</p>
            <p><span className="font-semibold text-gray-900">Email:</span> {user.email}</p>
            <p><span className="font-semibold text-gray-900">Contact:</span> {user.contactNumber}</p>
            <p><span className="font-semibold text-gray-900">Age:</span> {user.age}</p>
            <p><span className="font-semibold text-gray-900">Address:</span> {user.address}</p>
            <p><span className="font-semibold text-gray-900">Department:</span> {user.department}</p>
            <p><span className="font-semibold text-gray-900">Description:</span> {user.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
