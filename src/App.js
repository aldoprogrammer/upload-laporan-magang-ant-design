import "./App.css";
import { Upload, Button, Spin, Grid } from "antd"; 
import "antd/dist/antd.css";

export default function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: "100vh",
    }} 
    >
    <h2>Disini Tempat Upload Laporan Magang Kalian</h2><br/>
    
    <Upload.Dragger multiple
      listType="picture"
      action={"http://localhost:3000"}
      iconRender={() => {
        return <Spin></Spin>;
      }}
      style={{
        padding: "50px"
      }}
    >
      Tarik File Laporan Ke Sini, Atau
      <br />
      <Button>Upload</Button>
    </Upload.Dragger>
    </div>
    
  );
}
