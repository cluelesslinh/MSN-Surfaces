import styled from 'styled-components';

export const TopTitleBox = styled.div`
background-color: white;
height: 10%;
width: 425px;
display: flex;
align-items: center;
justify-content: center;
margin: 5em 0 2em 75%;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    margin: 3em 0 0 0;
}
`;

export const TopTitle = styled.div`
font-size: 2.25em;
letter-spacing: .175em;
`;

export const TopDescriptionBox = styled.div`
display: flex;
flex-wrap: nowrap;
justify-content: center;
background-color: white;
width: 425px;
max-width: 625px;
min-width: 425px;
margin: 0 0 0 75%;
padding: 1em 0 1em 0;
@media screen and (max-width: 768px) {
    margin: 3em 0 0 0;
}
`;

export const TopDescription = styled.div`
font-weight: 600;
font-size: 1em;
letter-spacing: .075em;
padding: .25rem 0 .25rem 1rem;
`;

