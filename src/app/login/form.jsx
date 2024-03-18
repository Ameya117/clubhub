"use client"; // Indicates that this module is client-side code.

import { signIn } from "next-auth/react"; // Import the signIn function from NextAuth for authentication.
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; // Import Next.js navigation utilities.
import { ChangeEvent, useState } from "react"; // Import React hooks for managing component state.

export const LoginForm = () => {
	const router = useRouter(); // Initialize the Next.js router.
	const [loading, setLoading] = useState(false); // State for managing loading state.
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	}); // State for form input values.
	const [error, setError] = useState(""); // State for handling errors during authentication.

	const searchParams = useSearchParams(); // Get query parameters from the URL.
	const callbackUrl = searchParams.get("callbackUrl") ?? "/profile"; // Define a callback URL or use a default one.

	// Handle form submission
	const onSubmit = async (e) => {
		e.preventDefault(); // Prevent the default form submission behavior.
		try {
			setLoading(true); // Set loading state to true.
			setFormValues({ email: "", password: "" }); // Clear form input values.

			// Attempt to sign in using the credentials (email and password).
			const res = await signIn("credentials", {
				redirect: false,
				email: formValues.email,
				password: formValues.password,
				callbackUrl,
			});

			setLoading(false); // Set loading state back to false.

			// console.log(res); // Log the authentication response.
			if (!res?.error) {
				router.push(callbackUrl); // Redirect to the callback URL on successful authentication.
			} else {
				setError("invalid email or password"); // Set an error message for invalid credentials.
			}
		} catch (error) {
			setLoading(false); // Set loading state back to false on error.
			//   setError(error); // Set the error message for any other errors.
		}
	};

	// Handle input field changes
	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value }); // Update the form input values.
	};

	// Define a CSS class for form inputs.
	const input_style =
		"form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none";

	return (
		<form onSubmit={onSubmit}>
			{error && (
				<p className="mb-6 rounded bg-red-300 py-4 text-center">
					{error}
				</p>
			)}
			<div className="bg-[#fff] min-h-screen pt-4">
				<div className="bg-[#fff] py-20 container flex flex-col items-center justify-center gap-12 px-4 main-screen">
					<h1 className="bg-[#fff] text-2xl font-extrabold tracking-tight text-black sm:text-[5rem] add-drop-heading">
						<span
							style={{
								textShadow: "1.7px 1.7px #3CD4E4",
								fontSize: "50px",
							}}
						>
							Welcome to{" "}
						</span>
						<span
							className="bg-[#FCFD9ED9] px-4 rounded-sm"
							style={{
								textShadow: "1.7px 1.7px #3CD4E4",
								fontSize: "50px",
							}}
						>
							ClubHub
						</span>
					</h1>
					<h6 className="text-center" style={{ fontSize: "20px" }}>
						Clubhub descriptions
					</h6>

					<div className="flex justify-center items-center w-[80vw] max-lg:mt-[-3vh] max-lg:flex-col">
						<div className="basis-3/6 self-center justify-self-center max-lg:basis-auto max-lg:w-full lg:mr-10">
							<div className="max-lg:scale-75">
								<h3 className="mb-[1vw] pl-2 text-left text-xl font-semibold sm:text-3xl">
									Log in
								</h3>

								<Link
									href="/login"
									onClick={() =>
										signIn("google", { callbackUrl })
									}
									className="flex rounded-full border-2 border-black px-8 py-2 text-left text-2xl font-medium text-gray-700 max-lg:w-full "
								>
									<div className="flex items-center w-full max-lg:gap-4">
										<img
											className="my-auto ml-[-1rem] scale-75"
											src="/google_icon.svg"
											alt="google-logo"
										/>
										<p className="text-base  sm:text-xl ">
											Continue with VIT Email
										</p>
									</div>
								</Link>
							</div>
							<div
								className="flex justify-center"
								style={{ lineHeight: "6" }}
							>
								-------------or-------------
							</div>
							<div className="max-lg:scale-75">
								<h3 className="mb-[1vw] pl-2 text-left text-xl font-semibold sm:text-3xl">
									Sign Up
								</h3>

								<Link
									href="/login"
									onClick={() =>
										signIn("google", { callbackUrl })
									}
									className="flex rounded-full border-2 border-black px-8 py-2 text-left text-2xl font-medium text-gray-700 max-lg:w-full"
								>
									<div className="flex items-center w-full max-lg:gap-4">
										<img
											className="my-auto ml-[-1rem] scale-75"
											src="/google_icon.svg"
											alt="google-logo"
										/>
										<p className="text-base sm:text-xl ">
											Continue with VIT Email
										</p>
									</div>
								</Link>
							</div>
						</div>
						<div className="basis-3/6 flex justify-center items-center max-md:scale-75">
							<img
								style={{ height: "300px", marginLeft: "20px" }}
								src="/landing_page.png"
								alt="landing-page-img"
							/>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};