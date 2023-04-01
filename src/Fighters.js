import { useState } from "react";
import jokerPic from "./pictures/joker.jpg"
import terryPic from "./pictures/terry.webp"

const Fighters = () => {
    const [fighters, setCharacters] = useState([
        { image: jokerPic, title: 'Joker', description: "Joker is a middleweight who can wall jump. He boasts very quick mobility, with a fast dashing speed; above-average walking, air, and falling speeds; the 4th highest fast fall speed; above-average air acceleration; and high gravity, though his initial dash is merely average. His slender frame gives him a thinner and slightly shorter hurtbox compared to other humanoid characters, which, in conjunction with his quick speed makes Joker hard to punish, and hard to hit.", id: 1},
        { image: terryPic, title: 'Terry', description: "Terry is a tall, heavyweight fighter who weighs the same as Samus, Dark Samus, and Bowser Jr. Due to hailing from a traditional fighting game series, Terry always faces his opponent in 1-on-1 matches, a trait that he shares with Ryu, Ken, and Kazuya. While this makes it more difficult for him to utilize his powerful back aerial, it more importantly makes his command inputs easier to execute and less likely to misinput, and allows him to punish rolls and cross ups more easily than the vast majority of the cast. He has slow air speed, a very slow initial dash, and decent dashing speed, but is characterized most by his great ground game. This includes a potent backward dash (which allows Terry to play footsies very effectively), a strong set of normal moves and special moves, his unique ability to attack directly out of a spot dodge, and his comeback mechanic which allows incredibly powerful Super Special Moves that require specific input combinations to use.", id: 2}
    ])

    console.log(fighters);
    console.log(fighters.image);


    const handleDelete = (id) => {
        const newFighters = fighters.filter(fighter => fighter.id !== id);
        setCharacters(newFighters);
    }

    return (  
        <div className="fighters">
            {fighters.map((fighter) => (
                <div className="fighters-preview">
                    <img src={fighter.image} alt="Yes" />
                    <h2>{fighter.title}</h2>
                    <p>{fighter.description}</p>
                    <button className="delete" onClick={() => handleDelete(fighter.id)}>DELETE</button>
                    <button className="CHOOSE">CHOOSE THIS CHARACTER</button>
                </div>
            ))}
        </div>
    );
}
 
export default Fighters