import React, { useId } from "react";

function CheckBox() {
  const id = useId();

//   console.log(id);
//we cannot use CSS selctors for id since its start with colon and it will throw and error

  return (
    <>
      {/* 
         if we create two components and try to click on secon component text then still firstc checkbox will checcked
        //thats why we use useId

        // <div>
        //     <label htmlFor='row1'>Are you learning react : </label>
        //     <input id = 'row1' type="checkbox"/>
        // </div>

        // useId - it will create uniique Ids and that we can pass 

        //this will solve above problem */}

      {/* <div>
        <label htmlFor={id}>Are you learning react : </label>
        <input id={id} type="checkbox" />
      </div> */}

      {/* //what if we have multi components in one component */}

      {/* we can use 
        const id1 = useId();
        const id2 = useId();

        and pass onto different one but this is not good practice instead we add some text after id */}

      <div>
        <label htmlFor={`id-react`}>Are you learning react : </label>
        <input id={`id-react`} type="checkbox" />
      </div>

      <div>
        <label htmlFor={`id-redux`}>Are you learning redux : </label>
        <input id={`id-redux`} type="checkbox" />
      </div>
    </>
  );
}

export default CheckBox;
