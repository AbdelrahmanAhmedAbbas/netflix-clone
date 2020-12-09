import React from "react";
import { Feature, OptForm } from "../components";
import FaqsContainer from "../containers/faqs";
import FooterContainer from "../containers/footer";
import HeaderContainer from "../containers/header";
import JumbotronContainer from "../containers/jumbotron";

export default function Home() {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited files, TV programmes and More</Feature.Title>
          <Feature.SubTitle>Watch anywhere Cancel any Time</Feature.SubTitle>
          <OptForm>
            <OptForm.Text>
              Ready to watch? Enter your email to create or restart your
              membership
            </OptForm.Text>
            <OptForm.Break />
            <OptForm.Input placeholder="Email address" />
            <OptForm.Button>Get Started</OptForm.Button>
          </OptForm>
        </Feature>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />
    </React.Fragment>
  );
}
