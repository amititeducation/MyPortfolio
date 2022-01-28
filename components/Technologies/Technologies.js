import React from 'react';
import { DiFirebase, DiJava, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id = "tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of Technologies in the web development and Android Development world. From Back-end To Design.</SectionText>

    <List>
      <ListItem>
        <DiReact size = "3rem" />
        <ListContainer>
          <ListTitle>From-End</ListTitle>
          <ListParagraph>
            Experienced with <br/>
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size = "3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experienced with <br/>
            Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiJava size = "3rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
            Experienced with <br/>
            Java and DataStructureAlgorithms
          </ListParagraph>
        </ListContainer>
      </ListItem>

    </List>
    <SectionDivider/>
  </Section>
);

export default Technologies;
