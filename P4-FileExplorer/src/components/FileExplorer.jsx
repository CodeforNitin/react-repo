import React, { useState } from 'react'


// Recursive component to display folders and files
const FileExplorer = ({ data }) => {
  return (
    <div style={{ marginLeft: '20px' }}>
      {data.map((item) => (
        <div key={item.id}>
          {item.type === 'folder' ? (
            <div>
              <strong> 📁{item.name}</strong>
              {item.children && item.children.length > 0 && ( 
                <FileExplorer data={item.children} />
              )}
            </div>
          ) : (
            <div> 📄{item.name}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileExplorer;