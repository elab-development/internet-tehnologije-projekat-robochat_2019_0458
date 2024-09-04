import styled from "styled-components";

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;
`;
export const StyledBtn = styled.button`
  background: #874CCC;
  padding: ${props => (props.zero ? "1rem 1.375rem" : "0.625rem 1.375rem")};
  color: #fff;
  outline: none;
  font-size: 1rem;
  margin: 0 auto;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1.5rem;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  border: none; /* Remove border if not needed */
  font-weight: bold;
  
  /* Different funky border-radius */
  border-radius: 1rem 2rem 3rem 4rem; /* Adjust these values to your liking */

  &:hover {
    background: #F27BBD;
    color: #fff;

    /* Different funky border-radius on hover */
    border-radius: 4rem 3rem 2rem 1rem; /* Adjust these values to your liking */
  }`;

export const YellowColor = styled.span`
  color: #7CB9E8;
`;
