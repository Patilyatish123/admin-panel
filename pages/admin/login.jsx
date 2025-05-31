import { useState } from "react";
import { useRouter } from "next/router";
import { sendOtp, verifyOtp } from "@/utils/api";
import { setToken } from "@/utils/auth";

export default function AdminLogin() {
  const [contactNumber, setContactNumber] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const router = useRouter();

  // Send OTP
  const handleSendOtp = async () => {
    try {
      if (contactNumber === '7710957578') {
        await sendOtp(contactNumber);
        setOtpSent(true);
      } else {
        alert('Only admin contact is allowed');
      }
    } catch (error) {
      alert('Failed to send OTP');
    }
  };


  // Verify OTP
  const handleVerifyOtp = async () => {
    try {
      const response = await verifyOtp(otp);
      const token = response.data.token;

      // Store token in cookie
      setToken(token);

      // Redirect to dashboard
      router.push('/admin/dashboard');
    } catch (error) {
      alert('Invalid OTP');
    }
  };

  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-180 via-purple-200 to-pink-200">
  <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
    <h2 className="text-3xl font-bold text-center mb-6">Admin Login</h2>

    <input
      type="text"
      placeholder="Enter contact number"
      className="border border-gray-300 p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={contactNumber}
      onChange={(e) => setContactNumber(e.target.value)}
    />

    {!otpSent ? (
      <button
        onClick={handleSendOtp}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 w-full rounded transition"
      >
        Send OTP
      </button>
    ) : (
      <>
        <input
          type="text"
          placeholder="Enter OTP"
          className="border border-gray-300 p-3 w-full mt-4 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <button
          onClick={handleVerifyOtp}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 w-full rounded transition"
        >
          Verify OTP
        </button>
      </>
    )}
  </div>
</div>

    </>
  );
}
