import Image from "../../Image/Image";
import './Styles.css'

function UserImageName({srcImg, name}) {
    return( 
        <>
            <Image src={srcImg} alt="user" className="rounded-full" />  
            <span className="pt-3" >{name}</span>
        </>

    )
}

export default UserImageName;