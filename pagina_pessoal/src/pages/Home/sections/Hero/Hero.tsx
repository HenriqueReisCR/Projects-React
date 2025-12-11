import { styled } from "@mui/material/styles";

    const StyledHero = styled("div")(() => ({
    backgroundColor: "red",
    color: "red",
    padding: "2rem"
}));

const Hero = () => {


    return (
        <>
            <StyledHero>
                Olá resre
            </StyledHero>
        </>
    );
};

export default Hero;