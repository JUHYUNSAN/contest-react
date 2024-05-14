import React, { useState, useEffect } from "react";
import {GameContainer, ImgContainer, ImgBox, Round, Game} from "./styled";

import p0 from "../../assets/movieImages/avengers.jpg";
import p1 from "../../assets/movieImages/batman.jpg";
import p2 from "../../assets/movieImages/benjaminbutton.jpg";
import p3 from "../../assets/movieImages/et.jpg";
import p4 from "../../assets/movieImages/findingnemo.jpg";
import p5 from "../../assets/movieImages/galuxy.jpg";
import p6 from "../../assets/movieImages/harrypotter.jpg";
import p7 from "../../assets/movieImages/howelsmovingcastle.jpg";
import p8 from "../../assets/movieImages/howtotraindragon.jpg";
import p9 from "../../assets/movieImages/insideout.jpg";
import p10 from "../../assets/movieImages/interstellar.jpg";
import p11 from "../../assets/movieImages/jaws.jpg";
import p12 from "../../assets/movieImages/joker.jpg";
import p13 from "../../assets/movieImages/jurassicpark.jpg";
import p14 from "../../assets/movieImages/kiminonamae.jpg";
import p15 from "../../assets/movieImages/lalaland.jpg";
import p16 from "../../assets/movieImages/lifeofpi.jpg";
import p17 from "../../assets/movieImages/memento.jpg";
import p18 from "../../assets/movieImages/openheimer.jpg";
import p19 from "../../assets/movieImages/paresite.jpg";
import p20 from "../../assets/movieImages/savingprivateryan.jpg";
import p21 from "../../assets/movieImages/shawshankedemption.jpg";
import p22 from "../../assets/movieImages/starwars.jpg";
import p23 from "../../assets/movieImages/suicidesquad.jpg";
import p24 from "../../assets/movieImages/thehobbit.jpg";
import p25 from "../../assets/movieImages/therings.jpg";
import p26 from "../../assets/movieImages/thewolfofwallstreet.jpg";
import p27 from "../../assets/movieImages/titanic.jpg";
import p28 from "../../assets/movieImages/topgun.jpg";
import p29 from "../../assets/movieImages/truemanshow.jpg";
import p30 from "../../assets/movieImages/up.jpg";
import p31 from "../../assets/movieImages/worldwarz.jpg";
import { Form } from "react-router-dom";


const candidate = [
    { key: 0, name: "Avengers", src: p0 },
    { key: 1, name: "Batman", src: p1 },
    { key: 2, name: "Benjamin button", src: p2 },
    { key: 3, name: "ET", src: p3 },
    { key: 4, name: "Finding nemo", src: p4 },
    { key: 5, name: "Galaxy", src: p5 },
    { key: 6, name: "Harry Potter", src: p6 },
    { key: 7, name: "Howels moving castle", src: p7 },
    { key: 8, name: "How to train your dragon", src: p8 },
    { key: 9, name: "Inside Out", src: p9 },
    { key: 10, name: "Interstellar", src: p10 },
    { key: 11, name: "JAWS", src: p11 },
    { key: 12, name: "Joker", src: p12 },
    { key: 13, name: "Jurassic park", src: p13 },
    { key: 14, name: "Kimino nawa", src: p14 },
    { key: 15, name: "Lalaland", src: p15 },
    { key: 16, name: "Life of PI", src: p16 },
    { key: 17, name: "Memento", src: p17 },
    { key: 18, name: "Openheimer", src: p18 },
    { key: 19, name: "Paresite", src: p19 },
    { key: 20, name: "Saving private ryan", src: p20 },
    { key: 21, name: "Shawshanke dempt", src: p21 },
    { key: 22, name: "Starwars", src: p22 },
    { key: 23, name: "Suicide Squad", src: p23 },
    { key: 24, name: "The Hobbit", src: p24 },
    { key: 25, name: "The Rings", src: p25 },
    { key: 26, name: "The wolf of wallstreet", src: p26 },
    { key: 27, name: "Titanic", src: p27 },
    { key: 28, name: "Topgun", src: p28 },
    { key: 29, name: "Trueman show", src: p29 },
    { key: 30, name: "UP", src: p30 },
    { key: 31, name: "World war Z", src: p31 }
  ];
  

  export const Main = () => {
    const [candy, setCandy] = useState(candidate);
    const [winCandy, setWinCandy] = useState([]);
    const [round, setRound] = useState(1);
    const [game, setGame] = useState(candidate?.length);

    useEffect(() => {
        setCandy(
            candidate
                .map((c) => {
                    return { key: c.key, name: c.name, src: c.src, order: Math.random() };
                })
                .sort((l, r) => {
                    return l.order - r.order;
                })
        );
    }, [])

    const handleClick = (e) => {

        setCandy((prev) => {
            const temp = prev.splice(0, 2)
            return prev.filter((el, i) => el.key !== temp.key)
        })
        setRound((prev) => prev + 1);
        setWinCandy((prev) => [...prev, e])
    }

    useEffect(() => {
        if (game === 1) {
            return;
        }
        if (candy.length === 0) {
            setRound(1);
            setWinCandy([]);
            setCandy(winCandy);
            setGame((prev) => prev / 2)
        }
    }, [round])




    return (
        <>
            {
                game === 1 ? <Game>Win!</Game> :
                    game === 2 ? <Game>決勝</Game> : <Game>{game}{"강"}</Game>
            }
            {game > 2 &&
                <Round>{round}{"Round"}</Round>
            }
            <GameContainer>
                {candy.map((e, i) => {
                    if (i > 1) return;
                    return (
                        <ImgContainer key={e.key} onClick={() => handleClick(e)}>
                            <ImgBox 
                            src={e.src} />
                            {e.name}
                        </ImgContainer>
                    )
                })}
            </GameContainer>
        </>
    )

}