import { signIn } from "next-auth/react";
import Head from "next/head";

const SignIn = () => {
  return (
    <>
      <Head>
        <title>Login | My Auth</title>
      </Head>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl text-center mb-6 font-semibold">Sign In</h2>

          <button
            onClick={() => signIn("google")}
            className="w-full mb-4 p-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Sign in with Google
          </button>

          <button
            onClick={() => signIn("github")}
            className="w-full p-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
          >
            Sign in with GitHub
          </button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
