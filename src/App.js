import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import penIcon from "./icon-pen.png";
import codeIcon from "./icon-code.png";
import uniIcon from "./icon-university.png";
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
            Contact me
          </Grid>
        </Grid>
        <Grid
          container
          justify="center"
          style={{ height: "auto", textAlign: "center" }}
        >
          <Grid item xs={12}>
            <h1 className="header-h1">
              Aiming to be become Full-Stack Developer
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
          <Grid
            item
            xs={12}
            style={{
              maxWidth: "50vw",
              marginTop: "90px",
              paddingBottom: "100px",
            }}
          >
            <div
              variant="h4"
              className="hi-h2"
              style={{ marginLeft: "5%", marginRight: "5%" }}
            >
              Hi, I'm Kiattipan. Nice to see you.
            </div>
            <p className="hi-p" variant="body">
              Since I gotten into the university, I have been working as graphic
              designer or leading the PR team during my extracurriculum
              activity, a few months ago, I decide to start learning how to
              coding almost everyday for the past months, I skipped a lot of
              class, and spent that time learning how to code. Combining my
              ability to do Graphic Design, and my obsession with coding, I knew
              I will become a great developer in the near future. Because I
              won't allow myself to be bad at coding, I want to improve, I want
              to be better, because coding is cool, it will open my career path,
              and ultiamtely, changes my life.
            </p>
          </Grid>
        </Grid>
        <div
          className="bg-purple"
          style={{
            height: "140px",
            width: "100vw",
          }}
        ></div>
        <Grid container justify="center" alignItems="flex-start">
          <Grid item style={{ width: "89%" }}>
            <Paper
              className={classes.paper}
              variant="outlined"
              style={{ marginTop: "-160px" }}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et faucibus urna, eu tincidunt nisl. Donec dictum, leo
                    id lobortis aliquet, odio nunc rhoncus quam, a venenatis
                    orci dolor ut libero. Donec pretium metus id erat volutpat,
                    vitae sagittis odio maximus. Nunc non commodo ligula. Etiam
                    pulvinar, tortor ac fringilla pulvinar, magna urna pretium
                    tellus, a pharetra ligula libero sed lacus. Vivamus sit amet
                    leo euismod, tristique ipsum eget, auctor leo. Duis id
                    efficitur lorem. Curabitur vehicula quam ut finibus
                    accumsan. Aenean dui erat, ornare sed semper nec, dictum ut
                    metus. Morbi euismod nunc diam, eget ultrices felis aliquet
                    ut. Donec non viverra massa, non pretium urna.
                  </p>
                </Grid>
                <Divider xs={1} sm={1} orientation="vertical" flexItem />
                <Grid item xs={12} sm={3} className="skills">
                  <img src={codeIcon} className="img-icon" alt="" />
                  <h2>Coding Skill</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et faucibus urna, eu tincidunt nisl. Donec dictum, leo
                    id lobortis aliquet, odio nunc rhoncus quam, a venenatis
                    orci dolor ut libero. Donec pretium metus id erat volutpat,
                    vitae sagittis odio maximus. Nunc non commodo ligula. Etiam
                    pulvinar, tortor ac fringilla pulvinar, magna urna pretium
                    tellus, a pharetra ligula libero sed lacus. Vivamus sit amet
                    leo euismod, tristique ipsum eget, auctor leo. Duis id
                    efficitur lorem. Curabitur vehicula quam ut finibus
                    accumsan. Aenean dui erat, ornare sed semper nec, dictum ut
                    metus. Morbi euismod nunc diam, eget ultrices felis aliquet
                    ut. Donec non viverra massa, non pretium urna.
                  </p>
                </Grid>
                <Divider xs={1} sm={1} orientation="vertical" flexItem />
                <Grid item xs={12} sm={3} className="skills">
                  <img src={uniIcon} className="img-icon" alt="" />
                  <h2>Certificates</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis et faucibus urna, eu tincidunt nisl. Donec dictum, leo
                    id lobortis aliquet, odio nunc rhoncus quam, a venenatis
                    orci dolor ut libero. Donec pretium metus id erat volutpat,
                    vitae sagittis odio maximus. Nunc non commodo ligula. Etiam
                    pulvinar, tortor ac fringilla pulvinar, magna urna pretium
                    tellus, a pharetra ligula libero sed lacus. Vivamus sit amet
                    leo euismod, tristique ipsum eget, auctor leo. Duis id
                    efficitur lorem. Curabitur vehicula quam ut finibus
                    accumsan. Aenean dui erat, ornare sed semper nec, dictum ut
                    metus. Morbi euismod nunc diam, eget ultrices felis aliquet
                    ut. Donec non viverra massa, non pretium urna.
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
              <h2 className="pj-h2">My Projects</h2>
              <p>Here are some of my projects.</p>
            </Grid>
            <Grid item xs={12} style={{ marginTop: "4rem" }}>
              <h3>CSS & HTML projects</h3>
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
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Card className={classes.cardSize}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="/static/images/cards/contemplative-reptile.jpg"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Lizard
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
