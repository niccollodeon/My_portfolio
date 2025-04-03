import Link from "next/link";

import { FaGithub, FaTwitter, FaFacebook, FaLinkedin} from "react-icons/fa";

const socials = [
    { icon: <FaGithub />, path: 'https://github.com/niccollodeon' },
    { icon: <FaFacebook />, path: 'https://www.facebook.com/mark.n.dayrit/' },
    { icon: <FaLinkedin />, path: 'https://www.linkedin.com/in/mark-niccollo-dayrit-37b803348/' },
];

const Social = ({containerStyles, iconStyles}) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
            return (
                <Link key={index} href={item.path} className={iconStyles}>
                    {item.icon}
                </Link>
            );
        })}
      </div>
    );
};

export default Social;