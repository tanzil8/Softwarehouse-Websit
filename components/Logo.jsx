import Image from "next/image";
import Link from "next/link"

const Logo = ({light = false}) => {
    //determined the text color based on the light prop
    const colorClass = light ? "text-white" : "text-primary" // default to black
  return (
 <Link href="/" className="hidden lg:block font-primary text-4xl tracking-[4px]">
      <Image src="/assets/contact/img28.png" alt="Logo" width={300} height={100} priority />
    </Link>
  );
}

export default Logo