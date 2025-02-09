import Link from "next/link";
import {FaFacebookF, FaTwitter, FaLinkedin, FaFacebook, FaTiktok} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const socials =[
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/mrdevelopper63"
    },
    {
        icon: <FaFacebookF />,
        path: "https://www.facebook.com/mr.developper.2025"
    },
    {
        icon: <FaTiktok />,
        path: "https://tiktok.com/@omer52223"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/omer6662"
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index)=>{
        return(
         <Link href={item.path} key={index} className={iconStyles}>
            <span>{item.icon}</span>
            </Link>
        );
    })}
    </div>
  
}

export default Socials