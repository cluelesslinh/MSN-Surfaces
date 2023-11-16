import styled from 'styled-components';

export const TopTitleBox = styled.div`
background-color: white;
height: 10%;
width: 425px;
display: flex;
align-items: center;
justify-content: center;
margin: 5rem 0 2rem 60%;
flex-wrap: wrap;
@media screen and (max-width: 768px) {
    margin: 3% 0 3% 3%;
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
margin: 0 0 0 60%;
padding: 1em 0 1em 0;
@media screen and (max-width: 768px) {
    min-width: 425px;
    margin: 3% 0 3% 3%;
}
`;

export const TopDescription = styled.div`
font-weight: 600;
font-size: 1em;
letter-spacing: .075em;
padding: .25rem 0 .25rem 1rem;
`;

