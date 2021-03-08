import "./App.css";
// import "./mediaq.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import penIcon from "./icon-pen.png";
import codeIcon from "./icon-code.png";
import uniIcon from "./icon-university.png";
import javascriptCal from "./javascript-calculator.gif";
import quoteMachine from "./quote-machine.gif";
import TodoList from "./Todo-List.gif";
import touchPad from "./touch-pad.gif";
import markdown from "./markdown.gif";
import leonardo from "./leonardo.gif";
import javascriptDoc from "./documentation.gif";
import surveyForm from "./survey.gif";
import email from "./email.png";
import lineme from "./line-me.png";
import facebook from "./facebook.png";
import {
  Button,
  Grid,
  Paper,
  makeStyles,
  Divider,
  Link,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.default,
  },
  cardSize: {
    minWidth: "20%",
  },
  media: {
    height: "140px",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <CssBaseline />
      {/* <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
        </Toolbar>
      </AppBar> */}
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
      >
        <Grid container alignItems="center" style={{ paddingTop: "1.5rem" }}>
          <Grid
            item
            xs="6"
            style={{
              paddingLeft: "10%",
              fontSize: "1.5rem",
              fontWeight: "bolder",
              color: "#6807f9",
            }}
          >
            K.M.
          </Grid>
          <Grid
            item
            xs="6"
            style={{
              paddingRight: "10%",
              fontsize: "1rem",
              color: "#6807f9",
              textAlign: "right",
            }}
          >
            <a
              href="#anchor"
              style={{ textDecoration: "none", color: "#7510f7" }}
            >
              Contact me
            </a>
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{ height: "auto", textAlign: "center" }}
        >
          <Grid item xs={12}>
            <h1 className="header-h1">
              Aiming to be become Full-Stack Web Developer
            </h1>
          </Grid>
          <Grid item xs={12} className="header-p">
            <p className="header-p">Clean design is cool, coding is cool.</p>
          </Grid>
        </Grid>
        <Grid
          container
          direction="columns"
          justify="center"
          style={{
            backgroundColor: "#7510F7",
            height: "420px",
            textAlign: "center",
            marginTop: "400px",
          }}
        >
          <Grid item xs={12} id="hi-grid">
            <div className="hi-wrap">
              <div
                variant="h4"
                className="hi-h2"
                style={{ marginLeft: "5%", marginRight: "5%" }}
              >
                Hi, I'm Kiattipan. Nice to see you.
              </div>
              <p className="hi-p">
                Since I gotten into the university, I have been working as
                graphic designer and leading of the PR team during my
                extracurriculum activity, a few months ago, I decide to enter
                into wordpress website contest, in which, I managed to get
                second place without coding skills, and I like it a lot so I
                decide to skip multiple class, learning how to code for the past
                months. because being able to code open up many opportunities.
              </p>
            </div>
          </Grid>
        </Grid>
        <div
          className="bg-purple"
          style={{
            height: "220px",
            width: "100vw",
          }}
        ></div>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ width: "89%" }}>
            <Paper
              className={classes.paper}
              id="bg-purple-paper"
              variant="outlined"
            >
              <Grid
                container
                direction="row"
                alignItems="flex-start"
                justify="space-evenly"
                className={classes.root}
                style={{
                  marginTop: "1rem",
                  paddingTop: "2rem",
                  paddingBottom: "5rem",
                  color: "#363636",
                }}
              >
                <Grid item xs={12} sm={3} className="skills">
                  <img src={penIcon} className="img-icon" />
                  <h2>Design Skill</h2>
                  <p>
                    I like clean design, interactive simple design that's easy
                    on eyes.
                  </p>
                  <h2 style={{ paddingTop: "1.5rem" }}>Design Tools</h2>
                  <p>
                    Figma
                    <br />
                    WordPress
                    <br />
                    Photoshop
                    <br />
                    Illustrator
                    <br />
                    Canvas
                  </p>
                </Grid>
                <Divider xs={1} sm={1} orientation="vertical" flexItem />
                <Grid item xs={12} sm={3} className="skills">
                  <img src={codeIcon} className="img-icon" alt="" />
                  <h2>Coding Skill</h2>
                  <p>
                    I'm still new to coding, but I prefer easy to read code,
                    more than short code that's hard to follow.
                  </p>
                  <h2>Language & Framwork I use</h2>
                  <p>
                    Javascript
                    <br />
                    ES6
                    <br />
                    CSS3
                    <br />
                    HTML5
                    <br />
                    Python
                    <br />
                    ReactJS
                    <br />
                    Material UI
                  </p>
                </Grid>
                <Divider xs={1} sm={1} orientation="vertical" flexItem />
                <Grid item xs={12} sm={3} className="skills">
                  <img src={uniIcon} className="img-icon" alt="" />
                  <h2>Certificates</h2>
                  <p>I'm an autodidact, I enjoy study with online resources!</p>
                  <h2 style={{ paddingTop: "1.5rem" }}>What I have learned</h2>
                  <p>
                    Basic Python
                    <br />
                    Digital Marketing
                    <br />
                    Programming Foundation Javascript CSS & HTML
                    <br />
                    Javascript and Algorithms
                  </p>
                </Grid>
              </Grid>
            </Paper>
            <Grid
              item
              xs={12}
              className="pj-class"
              style={{ marginTop: "100px", textAlign: "center" }}
            >
              <h2 className="pj-h2">Recent Projects</h2>
              <p>Here are some of my projects.</p>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "4rem" }}>
              <h2>ReactJS Project</h2>
            </Grid>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              spacing={3}
              style={{ textAlign: "center" }}
            >
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://kiatm.com/todo-list/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={TodoList}
                        title="Uh oh, I forgot my homework!"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          ToDo-List
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          A simple app of ToDo-List, It has add function, clear
                          finish task function.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://kiatm.com/quote-machine/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={quoteMachine}
                        title="Roses are red, violet are blue, but what am I to do without you!"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Quote Machine
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          A machine that can generate a random quote from it's
                          stored data array, in which, you can also tweet the
                          quote using tweet API.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://kiatm.com/drum-machine/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={touchPad}
                        title="become a DJ today!"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Touch Pad
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          As the name suggest, you can play sound from the two
                          different libraries, you can click on it, or press the
                          keyboard to play!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://kiatm.com/javascript-calculator/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={javascriptCal}
                        title="The only calculator you will need!"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Javascript Calculator
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          It has all the functions a standard calculator have,
                          oh, do you need calculate something? Use this!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://kiatm.com/markdown-previewer/"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={markdown}
                        title="Preview your markdown!"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Markdown Previewer
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Markdown is a plain text formatting syntax aimed at
                          making writing for the internet easier, Markdown
                          Previewer let you review the markdown syntax in real
                          time!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "4rem" }}>
              <h2>CSS & HTML Project</h2>
            </Grid>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              spacing={3}
              style={{ textAlign: "center" }}
            >
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://codepen.io/icest0/pen/eYBVwBw"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={leonardo}
                        title="A tribute to leonardo"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          A tribute to Leonardo da Vinci
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          A simple page with grid layout about important event
                          of Leonardo's life. the genius who was born centuries
                          too early.
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://codepen.io/icest0/full/JjbLYVW"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={surveyForm}
                        title="Survey Form"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Service Survey Form
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          A survey form, that have everything a standard survery
                          form needed, it has checkboxes, textbox, name, numer
                          and a submit button!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <Link
                    href="https://codepen.io/icest0/full/bGBgByo"
                    color="inherit"
                    style={{ textDecoration: "none" }}
                  >
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image={javascriptDoc}
                        title="what is the syntax again?"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Javascript Documentation
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          Yup, It's the javascript documentation, not the
                          w3school, but both are good!
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Link>
                </Card>
              </Grid>
            </Grid>
            <div style={{ paddingBottom: "10rem" }}>
              <p
                style={{
                  textAlign: "center",
                  paddingTop: "45px",
                  fontFamily: "Raleway",
                  fontSize: "1.2rem",
                }}
              >
                more projects at <a href="https://github.com/icest99">Github</a>
              </p>
            </div>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className="footer"
        style={{
          backgroundColor: "#7510F7",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          textAlign: "center",
          color: "white",
        }}
      >
        <Grid item xs={12}>
          <h2 id="anchor" style={{ fontSize: "1.8rem" }}>
            Contact Me
          </h2>
        </Grid>
        <Grid item xs={4}>
          <img src={email} className="footer-img" alt="" />
        </Grid>
        <Grid item xs={4}>
          <Link href="https://line.me/ti/p/~icest0">
            <img src={lineme} className="footer-img" alt="" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Link href="https://www.facebook.com/ice.st0/">
            <img src={facebook} className="footer-img" alt="" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Typography paragraph>mapaambiguous@gmail.com</Typography>
        </Grid>
        <Grid item xs={4}>
          icest0
        </Grid>
        <Grid item xs={4}>
          Kiattipan Muanghai
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
