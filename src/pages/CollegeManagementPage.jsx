import Auth from "../Auth";

function CollegeManagement({ user }) {
  return <h2>Welcome, College Management {user.name}!</h2>;
}

const CollegeManagementPage = Auth(CollegeManagement, "collegeManagement");

export default CollegeManagementPage;
