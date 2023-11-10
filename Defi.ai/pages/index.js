const { initializeLibp2p } = require("../libp2p");

async function handleSignUp(event) {
  event.preventDefault();

  // Get the email and password from the form
  const email = event.target.email.value;
  const password = event.target.password.value;

  // Initialize Libp2p and Helia IPFS Node
  const { heliaIPFS } = await initializeLibp2p();

  // Use the Helia IPFS Node to store the email and password
  await heliaIPFS.store({ email, password });

  // Clear the form fields
  event.target.email.value = "";
  event.target.password.value = "";
}
export default function Home() {
  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
