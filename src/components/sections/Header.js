import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Countdown from '../common/Countdown';

import { Container } from '@components/global';
import ExternalLink from '@common/ExternalLink';

const Header = () => (
  // this.date = new Date("June 02, 2020 00:00:00 GMT-05:00");
  <StaticQuery
    query={graphql`
      query {
        art_build: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "build" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1400) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <HeaderWrapper>
        <Container>
          <Grid>
            <Art>
              <Img fluid={data.art_build.childImageSharp.fluid} />
            </Art>
            <Text>
              <h1>
                100 Days of
                <br />
                fun
                <br />
                friends
                <br/>
                adventure
                <br/>
                pie
                <br/>
                enjoyable commutes
                <br/>
                healthy choices
                <br/>
                sustainability
                <br/>
                punk rock
                <br/>
                shameless sweat
                <br/>
                bicycling
                <br/>
                practicality
                <br/>
                summer
                <br/>
                childlike awe
                <br/>
                new routes
                <br/>
                spontaneous stops
                <br/>
                smiling miles
                <br/>
                exercise
                <br/>
                classic elegance
                <br/>
                efficiency in motion
                <br/>
                traditional practicality
                <br/>
                grocery getting
                <br/>
                breaking stereotypes
                <br/>
                paper mache!
                <br/>
                parades
                <br/>
                gear swaps
              </h1>
              <br />
              <p>
                <StyledExternalLink href="https://github.com/ajayns/gatsby-absurd">
                  Check out source &nbsp;&#x2794;
                </StyledExternalLink>
              </p>
            </Text>
          </Grid>
          <Banner>
            <Text>
              <h3>
                <Countdown date={'June 02, 2020 00:00:00 GMT-05:00'}/>
              </h3>
            </Text>
          </Banner>
        </Container>
      </HeaderWrapper>
    )}
  />
);

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.primary};
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  margin-bottom: 64px;
  margin-top: 64px;
`;

const Art = styled.figure`
  width: 100%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      width: 100%;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 64px;

  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 80px;

    > ${Art} {
      order: 2;
    }
  }
`;

const Text = styled.div`
  justify-self: center;

  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: start;
  }
`;

const StyledExternalLink = styled(ExternalLink)`
  color: inherit;
  text-decoration: none;

  &:hover {
    color: ${props => props.theme.color.black.regular};
  }
`;

export default Header;
