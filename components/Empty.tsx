import { FC } from "react";
import Image from "next/image";

type Props = {
  label: string;
};
const Empty: FC<Props> = ({ label }) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image src={"/empty.png"} alt={"Empty"} fill />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
};
export default Empty;
