import styles from './welcome-msg.module.css'
import { getImageURL } from '../../utils/functions'

const WelcomeMsg = ({ category }) => {
    return (
        <>
            <div className={styles.displayContent}>

                {category === "home" &&
                    <>
                        <img className={styles.img} src={getImageURL("animals.jpg")} />
                        <h2>WELCOME TO AUSTRALIAN ZOO</h2>
                        <p>The Australian Zoo is a renowned wildlife park dedicated to the conservation and protection of native and exotic animals. Founded by the legendary Steve Irwin and his family, the zoo offers visitors a chance to experience Australia's incredible biodiversity up close, with interactive exhibits and educational programs promoting wildlife conservation.</p>
                    </>
                }


                {category === "reptiles" &&
                    <>
                        <img className={styles.img} src={getImageURL("reptiles.jpg")} />
                        <h2>Welcome to the reptiles of Australia</h2>
                        <p>Australia is famous for its diverse and often venomous reptiles. It is home to crocodiles, monitor lizards, turtles, and some of the world's most dangerous snakes, like the inland taipan. Many of these reptiles are well-adapted to Australia's extreme climates and play an essential role in maintaining ecological balance.</p>                </>
                }

                {category === "birds" &&
                    <>
                        <img className={styles.img} src={getImageURL("birds.jpg")} />
                        <h2>Welcome to the birds of Australia</h2>
                        <p>Australia boasts a rich variety of bird species, from the colorful lorikeets to the iconic kookaburra and emu. Many Australian birds, such as parrots and cockatoos, are known for their intelligence and vibrant plumage. The country’s vast landscapes provide diverse habitats, supporting both endemic and migratory bird species.</p>
                    </>
                }

                {category === "mammals" &&
                    <>
                        <img className={styles.img} src={getImageURL("mammals.jpg")} />
                        <h2>Welcome to the mammals of Australia</h2>
                        <p>Australia is home to unique mammals, many of which are marsupials—animals that carry their young in pouches. Iconic species include the kangaroo, koala, wombat, and platypus. These animals have adapted to diverse habitats, from forests to deserts, and play vital roles in the ecosystem.</p>                    </>
                }

            </div>

        </>
    )
}

export default WelcomeMsg
