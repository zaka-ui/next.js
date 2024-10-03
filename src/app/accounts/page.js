import { redirect } from "next/navigation";

export default function Accounts() {

   const userInfo = null;


    if(userInfo === null) redirect("profile");

    return (
      <div className="">
        <h1>dezidjzeod</h1>
      </div>
    );
  }