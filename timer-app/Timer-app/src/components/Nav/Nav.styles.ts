import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.5rem;

    .logo{
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
    }

    .clock{
        font-size: 2.5em;
    }

    h2{
        font-size: 1.2em;
    }

    .nav{
        display: flex;
        gap: 2rem;
        
    }

    .navLink{
        display: flex;
        align-items: center;
        font-size: 1em;
    }

    .navLink:hover{
    
    }

    .icon{
        font-size: 1.3em;
    }
`