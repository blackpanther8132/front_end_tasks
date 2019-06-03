import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
// import Checkbox from '@material-ui/core/Checkbox';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
import './styles/Section_1.css';

function createData(rank, Node_ID, Last_24hr, Last_7_days, Last_month, total, total_sessions) {
  return { rank, Node_ID, Last_24hr, Last_7_days, Last_month, total, total_sessions };
}

const rows = [
  createData('', '0xc6e75b1dd5a7753f8075...', 20, 60, 120, 200, 204),
  createData('', '0x94h2u34h5u45h4u5g5g5...', 10, 53, 183, 236, 754),
  createData('', '0x24epbgn4t7o8s34i799tr5...', 6, 50, 103, 159, 454),
  createData('', '0xr8t7b1y81d697y1eop417...', 30, 70, 100, 200, 354),

];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
  { id: 'rank', numeric: true, disablePadding: true, label: 'Rank' },
  { id: 'Node_ID', numeric: false, disablePadding: false, label: 'Node ID' },
  { id: 'Last_24hr', numeric: true, disablePadding: false, label: 'Last 24Hr' },
  { id: 'Last 7 Days', numeric: true, disablePadding: false, label: 'Last 7 Days' },
  { id: 'Last Month', numeric: true, disablePadding: false, label: 'Last Month' },
  { id: 'total', numeric: true, disablePadding: false, label: 'Total' },
  { id: 'total_sessions', numeric: true, disablePadding: false, label: 'Total Sessions' },

];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead className="bandwidth_table_head">
      <TableRow>

        <TableCell
          // align={row.numeric ? 'right' : 'left'}
          className="bandwidth_table_head_row1"
          colSpan="2"
        >

        </TableCell>
        <TableCell
          // align={row.numeric ? 'right' : 'left'}
          className="bandwidth_table_head_row1"
          colSpan="4"
        >
          Bandwidth Provided
            </TableCell>
        <TableCell
          colSpan="2"
          // align={row.numeric ? 'right' : 'left'}
          className="bandwidth_table_head_row1"
        >
        </TableCell>
      </TableRow>
      <TableRow>
        {headRows.map(row => (
          <TableCell
            key={row.id}
            align={row.numeric ? 'Center' : 'left'}
            padding={row.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === row.id ? order : false}
            className="bandwidth_table_head_row2"
          >
            <TableSortLabel
              active={orderBy === row.id}
              direction={order}
              onClick={createSortHandler(row.id)}
            >
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

// const useToolbarStyles = makeStyles(theme => ({
//   root: {
//     paddingLeft: theme.spacing(2),
//     paddingRight: theme.spacing(1),
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// }));

const EnhancedTableToolbar = props => {
  //   const classes = useToolbarStyles();
  //   const { numSelected } = props;

  return (
    <Toolbar
      className=""
    >
      {/* <div className="">
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subtitle1">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="h6" id="tableTitle">
            Nutrition
          </Typography>
        )}
      </div>
      <div className="" />
      <div className="">
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div> */}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   paper: {
//     width: '100%',
//     marginBottom: theme.spacing(2),
//   },
//   table: {
//     minWidth: 750,
//   },
//   tableWrapper: {
//     overflowX: 'auto',
//   },
// }));

function EnhancedTable(props) {
  const data = props.data;
  // console.log("this is table data", data);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('Node ID');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  }

  function handleClick(event, name) {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  }

  function handleChangePage(event, newPage) {
    // console.log(" sda;", newPage)
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
  }

  //   function handleChangeDense(event) {
  //     setDense(event.target.checked);
  //   }

  const isSelected = name => selected.indexOf(name) !== -1;

  //   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
  function copyNodeId(id) {
    const el = document.createElement('textarea');
    el.value = id;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    // console.log("this is data", id)
  }
  return (
    <div className="">
      <Paper className="">
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <div className="">

          {props.loading ?
            <div style={{ overflowX: "auto" }}>
              <Table
                className=""
                aria-labelledby="tableTitle"
                size={dense ? 'small' : 'medium'}
              >
                <EnhancedTableHead
                  numSelected={selected.length}
                  order={order}
                  orderBy={orderBy}
                  onSelectAllClick={handleSelectAllClick}
                  onRequestSort={handleRequestSort}
                  rowCount={rows.length}
                />
                <TableBody>

                  {stableSort(data, getSorting(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row, i) => {
                      const isItemSelected = isSelected(row.name);
                      return (
                        <TableRow
                          //   hover
                          onClick={event => handleClick(event, row.name)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.name}
                          selected={isItemSelected}
                          className="bandwidth_table_row"
                        >
                          {/* <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell> */}
                          <TableCell align="center">
                            {i + 1}
                          </TableCell>
                         {/* <Tooltip className = "tooltip" title = {row.Node_ID} > */}
                          <TableCell align="left" onClick={() => copyNodeId(row.Node_ID)} style={{ cursor: "pointer" }} title = {row.Node_ID}>{(row.Node_ID).substring(0, 20) + "..."}</TableCell>
                          {/* </Tooltip> */}
                          <TableCell align="center">{row.Last_24hr}GB</TableCell>
                          <TableCell align="center">{row.Last_7_days}GB</TableCell>
                          <TableCell align="center">{row.Last_month}GB</TableCell>
                          <TableCell align="center">{row.total}GB</TableCell>
                          <TableCell align="center">{row.total_sessions> 1000 ? ((row.total_sessions)/1000).toFixed(2)+"K" : row.total_sessions}</TableCell>

                        </TableRow>
                      );
                    })}
                  {/* {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}

                </TableBody>

              </Table>
            </div>
            : <div className="busyIndicator">Loading...</div>}
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
              onChange: () => this.handleChangePage()
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            className="pagination_bandwidth"
          />
        </div>

      </Paper>
      {/* <FormControlLabel
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense padding"
      /> */}
    </div>
  );
}

export default EnhancedTable;
