import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

interface Props {
  items: Array<any> | null;
}

const useStyles = () => {
  const classes = {
    input: {
      padding: 5,
    },
    form: {
      marginTop: 10,
    },
    item: {
      height: 300,
      background: "#ccc",
      borderRadius: 8,
    },
    gridList: {
      width: "70%",
      height: "100vh",
    },
  };
  return classes;
};

const Gallery = ({ items }: Props) => {
  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "space-around",
      }}
    >
      <GridList cellHeight={380} style={classes.gridList} cols={3} spacing={20}>
        {items?.map((item, index) => (
          <GridListTile key={index} cols={1}>
            <div style={classes.item}>{item.title}</div>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};
export default Gallery;
