import { useState } from "react";


import Demo1JSXBasic from "./components/Demo1JSXBasic";
import Demo2Component from "./components/Demo2Component";
import Demo3PropBasic from "./components/Demo3PropBasic";
import Demo4PropsChildren from "./components/Demo4PropsChildren";
import Demo5Rendering from "./components/Demo5Rendering";
import Demo6ListRendering from "./components/Demo6ListRendering";
import Demo7EventGandling from "./components/Demo7EventGandling";
import Demo8ReadonlyProps from "./components/Demo8ReadonlyProps";
import Demo9DefaultProps from "./components/Demo9DefaultProps";
import Demo10Review from "./components/Demo10Review";
import Demo11ETicaretSepeti from "./components/Demo11ETicaretSepeti";





function App() {

  const [selectedDemo,setSelectedDemo] = useState(1);

  const demolar=[
    {id:1,ad:"Demo 1: Temel Jsx"},
    {id:2,ad:"Demo 2: Bileşenler"},
    {id:3,ad:"Demo 3: Props"},
    {id:4,ad:"Demo 4: Props Children"},
    {id:5,ad:"Demo 5: Koşullu Render"},
    {id:6,ad:"Demo 6: Listeleme Render"},
    {id:7,ad:"Demo 7: Olay Yönetimi"},
    {id:8,ad:"Demo 8: Salt Okunur"},
    {id:9,ad:"Demo 9: Varsayılan Prop"},
    {id:10,ad:"Demo 10: Tekrar"},
    {id:11,ad:"Demo 11: E-Ticaret Sepeti"}
  ];





  const renderDemo=()=>{

    switch(selectedDemo){
      case 1:
        return <Demo1JSXBasic/>;

      case 2:
        return <Demo2Component/>;

      case 3:
        return <Demo3PropBasic/>;

      case 4:
        return <Demo4PropsChildren/>;

      case 5:
        return <Demo5Rendering/>;

      case 6:
        return <Demo6ListRendering/>;

      case 7:
        return <Demo7EventGandling/>;

      case 8:
        return <Demo8ReadonlyProps/>;

      case 9:
        return <Demo9DefaultProps/>;

      case 10:
        return <Demo10Review/>;

      case 11:
        return <Demo11ETicaretSepeti/>;

      default:
        return <Demo1JSXBasic/>;
    }
  };





  return (
    <div className="p-4">

      <div className="border rounded">

        <div className="bg-red-500 p-4">
          <h1 className="text-white text-xl font-bold"> React ve Props Paneli</h1>
        </div>

        <div className="grid grid-cols-4">

          <div className="border-r p-2">

            <div className="flex flex-col gap-2">

              {demolar.map((demo)=>(
                <button key={demo.id} onClick={()=>setSelectedDemo(demo.id)} className={
                    selectedDemo===demo.id ?"bg-blue-500 text-white p-2 rounded text-left": "bg-gray-100 p-2 rounded text-left"}>{demo.ad}
                </button>
              ))}

            </div>

          </div>

          <div className="col-span-3 p-4"> {renderDemo()}</div>

        </div>

      </div>

    </div>
  );
}

export default App;