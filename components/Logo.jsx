import Link from "next/link"

const Logo = ({light = false}) => {
    //determined the text color based on the light prop
    const colorClass = light ? "text-white" : "text-primary" // default to black
  return (
  <Link href="/" className="font-primary text-4xl tracking-[4px]">
 <img src="/assets/contact/img28.png" alt="" width={300} />
  </Link>
  );
}

export default Logo