import React, { useEffect, useState } from "react";
import { RankingContext } from "../../../App";
import { useContext } from "react";
import { Container, Contents } from "./styled";

export const Ranking = () => {
    const {value , setValue} = useContext(RankingContext);
    const [contents, setContents] = useState(null)

    useEffect(() => {
        setContents(
            value.sort((l, r) => {
                return r.score - l.score;
            })
        );
        console.log(contents);
    }, [])

    return (
        <Container>
            {contents?.map((e, i) => {
                console.log(e)
                return (<Contents key ={i}>
                    {e.name} {"   "} {e.score}
                </Contents>
                )
            })}
        </Container>
    )
}