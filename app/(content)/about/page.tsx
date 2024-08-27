import Link from "next/link";
import { redirect } from "next/navigation";

const About = () => {
  

  const handleRedirect = () => {
    redirect('/album/1')
  };

  return (
    // <form action={handleRedirect}>
    //   <button className="border-2 bg-gray-200 p-5">
    //     앨범1 모달열기
    //   </button>
    // </form>
    <div>
      <Link href={'/album/1'}>앨범1 이동</Link>
    </div>
  );
};

export default About;
