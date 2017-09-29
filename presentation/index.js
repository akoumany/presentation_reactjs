// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  Typeface,
  Image,
  Layout,
  Fill,
  Appear,
  Link
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import CodeSlide from "spectacle-code-slide";
import shiaLabeoufMagicGif from "../assets/giphy.gif";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  marraforni: require("../assets/marraforni.png"),
  shiaLabeoufMagicGif
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#3454D1",
  tertiary: "#03A9FC",
  quartenary: "#CECECE",
  background: "#070707",
  title: "#D1345B"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
  // google font { name: "Droid Serif", googleFont: true, styles: [ "400", "700i" ] }
});

const styles = {
  fontSize: "0.6em"
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        {/* ReactJS */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} fit caps lineHeight={1} textColor="title">
            ReactJS
          </Heading>
          <Text margin="10px 0 0" textColor="primary" size={1} fit bold>
            fundamentals and tools for quicker and fun web development
          </Text>
        </Slide>

        {/* Some History */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} textColor="title" caps fit > history </Heading>
          <List textColor="primary">
            <Appear><ListItem>Developed by Facebook in 2011</ListItem></Appear>
            <Appear><ListItem>Deployed on FB & IG in 2014</ListItem></Appear>
            <Appear><ListItem>React Native released in 2015</ListItem></Appear>
            <Appear><ListItem>React Fiber announced 2 weeks ago</ListItem></Appear>
          </List>
        </Slide>

        {/* ReactJS in the wild*/}
        <Slide transition={["fade"]} bgColor="background">
          <Typeface googleFont="Roboto Slab" weight={100} fit>
            <Text textColor="tertiary" textSize={"1em"} >Organizations using ReactJS</Text>
          </Typeface>
          <Image src={"https://logo.clearbit.com/facebook.com"} />
          <Image src={"https://logo.clearbit.com/netflix.com"} />
          <Image src={"https://logo.clearbit.com/yahoo.com"} />
          <Image src={"https://logo.clearbit.com/instagram.com"} />
          <Image src={"https://logo.clearbit.com/nasa.gov"} />
        </Slide>

        {/* Netflix Quote */}
        <Slide transition={["fade"]} bgColor="background" textColor="primary">
          <BlockQuote>
            <Quote>

              Adoption of react influenced by startup speed, runtime performance, and modularity.

            </Quote>
            <Cite>Netflix</Cite>
          </BlockQuote>
        </Slide>

        {/* Why you should learn ReactJS? */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} caps fit textColor="title">
            Why you should learn ReactJS
          </Heading>

          <List textColor="primary">
            <Appear><ListItem>Fast Learning Curve</ListItem></Appear>
            <Appear><ListItem>Reusable Components</ListItem></Appear>
            <Appear><ListItem>Clean Abstraction</ListItem></Appear>
            <Appear><ListItem>Great Developer Support</ListItem></Appear>
            <Appear><ListItem>React Native</ListItem></Appear>
          </List>
        </Slide>

        {/* What is ReactJS? */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} caps fit textColor="title">
            What is ReactJS?
          </Heading>

          <Appear>
            <Heading size={5} textColor="primary">
              A JavaScript library for building large web apps that consumes lots of data
              without expensive reloading of the DOM.
            </Heading>
          </Appear>
        </Slide>

        {/* 3 ways to get started? */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} caps fit textColor="title">
            3 easy ways to get started
          </Heading>

          <List textColor="primary">
            <Appear><ListItem>The easiest. ReactJS & BabelJS cdn</ListItem></Appear>
            <Appear><ListItem>The quickest. npm i -g create-react-app </ListItem></Appear>
            <Appear><ListItem>The funnest. npm & babel & webpack</ListItem></Appear>
          </List>
        </Slide>

        {/* easiest way to get started? */}
        <CodeSlide
          style={styles}
          transition={["fade"]}
          lang="html"
          showLineNumbers={false}
          code={require("raw-loader!../assets/code.setup.easiest.html")}
          ranges={[
            { loc: [0, 21], title: "The easiest way to get started" },
            { loc: [0, 21], note: "Just HTML with ReactJS & BabelJS cdn" },
            { loc: [11, 19], note: "Just JavaScript, well, JSX" },
            { loc: [10, 11], note: "outputs 'Hello World!' " }
            // ...
          ]}
        />

        {/* quickest way to get started? */}
        <CodeSlide
          style={styles}
          transition={["fade"]}
          lang="html"
          showLineNumbers={false}
          code={require("raw-loader!../assets/code.setup.quickest")}
          ranges={[
            { loc: [0, 21], title: "The quickest way to get started" }
            // ...
          ]}
        />

        {/* the funnest way */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading caps fit size={1} textColor="title">The funnest way to get started</Heading>
          <Layout>
            <Appear>
              <Fill>
                <Heading size={2} caps textColor="primary" margin={10}>
                  npm
                </Heading>
                <Heading size={10} caps textColor="primary">Modules from ibm, nasa, google </Heading>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Heading size={2} caps textColor="tertiary" margin={10}>
                  webpack
                </Heading>
                <Heading size={7} caps textColor="primary">bundle your assets</Heading> <br />
                <Heading size={10} caps textColor="primary">.js .png .sass</Heading>
              </Fill>
            </Appear>
            <Appear>
              <Fill>
                <Heading size={2} caps textColor="primary" margin={10}>
                  babel
                </Heading>
                <Heading size={10} caps textColor="primary">The Hitchhikers Guide to the Galaxy?</Heading>
              </Fill>
            </Appear>
          </Layout>
        </Slide>


        {/* Lets look as some code */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.npm")}
            ranges={[
              { loc: [0, 270], title: "1. Initialize NPM and install packages" },
              { loc: [0, 1], title: "Lets do it!" },
              { loc: [2, 13], note: "./package.json" },
              { loc: [15, 18], title: "Lets install our packages" },
              { loc: [15, 16], note: "Webpack" },
              { loc: [16, 17], note: "Babel, webpack loader, and babel presets" },
              { loc: [17, 18], note: "and ReactJS" },
              { loc: [19, 37], title: "The fun begins" },
              { loc: [19, 22], note: "Lets gets these out of the way while we'r here!" },

              { loc: [24, 34], note: "Our public/index.html" },
              { loc: [31, 32], note: "Webpack will now place bundle.js in /public" },

              { loc: [36, 37], note: "The entry point of our ReactJS app" }

            ]}
        />

        {/* configure babel */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.configure.babel")}
            ranges={[
              { loc: [0, 9], title: "2. Configure babel" },
              { loc: [3, 4], title: "JavaScript for the cool kids" },
              { loc: [4, 5], title: "cool exports, spread ops, etc..." },
              { loc: [5, 6], title: "ReactJS Without JSX" }
            ]}
        />

        {/* configure webpack */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.configure.webpack")}
            ranges={[
              { loc: [0, 20], title: "3. Configure webpack" },
              { loc: [5, 7], title: "Its a good idea to seperate these two" },
              { loc: [8, 15], title: "Define your entry and output target locations" },
              { loc: [18, 20], note: "create bundle.js, open our html file and hope for the best!" },
              { loc: [18, 20], image: shiaLabeoufMagicGif }
            ]}
        />

        {/* no mo ./node_modules/.bin/webpack -d*/}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.configure.packagejs")}
            ranges={[
              { loc: [0, 20], title: "quick package.js edit" },
              { loc: [5, 9], title: "no more ./node_modules/.bin/webpack -d" },
              { loc: [6, 7], title: "npm start" },
              { loc: [7, 8], title: "npm run dev" }
            ]}
        />

        {/* 3 Core Concepts */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} caps fit textColor="title">
            Core concept behind ReactJS
          </Heading>

          <List textColor="primary">
            <ListItem>components, components, components</ListItem>
            <ListItem>JavaScript expressed as UI</ListItem>
            <ListItem>stateful vs stateless</ListItem>
          </List>
        </Slide>

        {/* 1. components */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.concepts.components")}
            ranges={[
              { loc: [0, 28], title: "so many ways to write a component" },
              { loc: [0, 1], note: "Components can represent DOM tags" },
              { loc: [2, 3], note: "Define your own components" },
              { loc: [2, 3], note: "Pass in a JSX attributes as a single JS object called props" },
              { loc: [4, 19], note: "A class component has its own lifecycle" },
              { loc: [6, 9], note: "Runs after a component has been rendered to the DOM." },
              { loc: [10, 13], note: "Runs when a component is being removed from the DOM" },
              { loc: [14, 17], note: "We always render a single React element" },
              { loc: [19, 28], note: "A functional components accepts a single props argument and returns a React element" }
            ]}
        />

        {/* 2. JS expressed as ui */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.concepts.js.ui")}
            ranges={[
              { loc: [0, 21], title: "JavaScript expressed as UI" },
              { loc: [1, 2], note: "Fetch list of current nasa missions" },
              { loc: [6, 11], note: "Iterate and create <li>hasSatellite</li>" },
              { loc: [16, 21], note: "Render the list" }
            ]}
        />

        {/* 3. stateful vs stateless */}
        <CodeSlide
          style={styles}
            transition={["fade"]}
            lang="js"
            code={require("raw-loader!../assets/code.concepts.stateful")}
            ranges={[
              { loc: [0, 23], title: "stateful vs stateless" },
              { loc: [0, 5], note: "Stateless, Functional, Container, Smart Component" },
              { loc: [5, 17], note: "Statefull, Presentational or Dumb Component." },
              { loc: [0, 17], note: "Seperate data-fetching from rendering components." },
              { loc: [17, 22], note: "Modular and more control" }
            ]}
        />

        {/* lets see an example */}
        <Slide transition={["fade"]} bgColor="background">
          <Heading size={1} textColor="title" fit caps>Lets see some code</Heading>
          <Link href="https://github.com/akoumany/reactified" >
            <Heading size={1} textColor="tertiary" fit>
              https://github.com/akoumany/reactified
            </Heading>
          </Link>
        </Slide>

        <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Image src={images.marraforni.replace("/", "")} margin="0px auto 40px" height="200px"/>
            <Heading size={1} caps fit textColor="title">
              Thank You!
            </Heading>
            <Link href="https://Linkedin.com/in/komiakoumany" >
              <Heading size={1} caps fit textColor="tertiary">
                Linkedin.com/in/komiakoumany
              </Heading>
            </Link>
        </Slide>

      </Deck>
    );
  }
}
