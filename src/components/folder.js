import { useState } from "react";

function Folder({ explorer}){
    // console.log(explorer);
    const[expand, setExpand] =useState(false);

    if (explorer.isFolder) {
      return (
        <div className="">
          <div className="folder" onClick={() => setExpand(!expand)}>
            <span>📁{explorer.name}</span>
            </div>

          <div className={expand ? "block pl-5" : "hidden"}>
            {explorer.items.map((exp) => {
              return <Folder explorer={exp} key={exp.id} />;
            })}
          </div>
        </div>
      );
    } else {
      return <span className="file">📄{explorer.name}</span>;
    }
}
export default Folder;