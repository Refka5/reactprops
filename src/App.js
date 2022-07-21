import "./App.css";
import Profile from "./profile/Profile";
import photoprofile from "./img/photoimg.PNG";

function App() {
  const showAlert = (name) => {
    alert(`my name is ${name}`);
  };

  return (
    <div className="container">
      <Profile
        fullName="Hlali Refka"
        bio="lovley,amazing,smart and pretty develloper"
        profession="web develloper"
        handelName={showAlert}
      >
        <img src={photoprofile} alt="This is my photoprofile" />
      </Profile>
    </div>
  );
}

export default App;
