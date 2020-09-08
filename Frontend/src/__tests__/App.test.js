import React from 'react';
import { render } from '@testing-library/react';
import { create } from 'react-test-renderer';
import App from '../App';
import FilmRatingsPage from '../FilmRatingsPage';
import AboutPage from '../AboutPage';
import Carousel from '../Carousel';
import Footer from '../Footer';
import HowItWorksPage from '../HowItWorksPage';


test.skip('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe(`Snapshot test of App`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceAppSnapshot = create(<App/>).toJSON();

    expect(testInstanceAppSnapshot).toMatchSnapshot();
  });
});

describe(`Snapshot test of FilmRatingsPage`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceFilmRatingsPageSnapshot = create(<FilmRatingsPage/>).toJSON();

    expect(testInstanceFilmRatingsPageSnapshot).toMatchSnapshot();
  });
});

describe(`Snapshot test of AboutPage`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceAboutPageSnapshot = create(<AboutPage/>).toJSON();

    expect(testInstanceAboutPageSnapshot).toMatchSnapshot();
  });
});

describe(`Snapshot test of Carousel`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceCarouselSnapshot = create(<Carousel/>).toJSON();

    expect(testInstanceCarouselSnapshot).toMatchSnapshot();
  });
});

describe(`Snapshot test of Footer`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceFooterSnapshot = create(<Footer/>).toJSON();

    expect(testInstanceFooterwSnapshot).toMatchSnapshot();
  });
});

describe(`Snapshot test of HowItWorksPage`, () => {
  it(`should match the snapshot every time it is rendered`, () =>{
    const testInstanceHowItWorksPageSnapshot = create(<HowItWorksPage/>).toJSON();

    expect(testInstanceHowItWorksPageSnapshot).toMatchSnapshot();
  });
});



