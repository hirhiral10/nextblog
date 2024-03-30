import Image from "next/image"
import classes from "./hero.module.css"

const Hero=()=>{
    return <section className={classes.hero}>
        <div className={classes.image}>
            <Image src={"/download.jpg"} alt="my pic" width={300} height={300}/>
        </div>
        <h1>Hi Hiral</h1>
        <p>Hello nice to work on next js app</p>
    </section>
} 

export default Hero