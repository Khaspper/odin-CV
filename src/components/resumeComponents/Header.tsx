import { useState } from "react";

interface PersonalInformation {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
}

export default function Header() {
  const [personalInformation, setPersonalInformation] =
    useState<PersonalInformation>({
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
    });
  return <></>;
}
