import Link from "next/link";
import {FaFacebookF, FaTwitter, FaLinkedin, FaFacebook, FaTiktok, FaGithub} from 'react-icons/fa'
import {RiInstagramFill} from 'react-icons/ri'

const socials =[
    {
        icon: <RiInstagramFill />,
        path: "https://www.instagram.com/luvvv_tanzil?igsh=MTFkaXk4bTNqbGg2"
    },
    {
        icon: <FaFacebookF />,
        path: "https://www.linkedin.com/in/tanzil-khan-4630b8319/"
    },
    {
        icon: <FaGithub />,
        path: "https://github.com/tanzil8"
    },
    {
        icon: <FaLinkedin />,
        path: "https://www.linkedin.com/in/tanzil-khan-4630b8319/"
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