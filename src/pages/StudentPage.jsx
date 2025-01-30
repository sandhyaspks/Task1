import Auth from "../Auth";

function Student({ user }) {
  return <h2>Welcome, Student {user.name}!</h2>;
}

const StudentPage = Auth(Student, "student");

export default StudentPage;
