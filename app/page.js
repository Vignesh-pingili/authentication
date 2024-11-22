import FileUpload from "./components/FileUpload";
import SigninButton from "./components/SigninButton";

export default function Home() {

  return (
    <div >
    <SigninButton></SigninButton>
     <div style={{padding:"150"}}>
     <FileUpload></FileUpload>
     </div>
    </div>
  );
}
