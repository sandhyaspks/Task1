import Auth from "../Auth";

function Admin({ user }) {
  return <h2>Welcome, Admin {user.name}!</h2>;
}

const AdminPage = Auth(Admin, "admin");

export default AdminPage;
