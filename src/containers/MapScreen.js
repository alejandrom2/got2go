import { connect } from 'react-redux';
import { compose, withState } from 'recompose';
import moment from 'moment';

//import { loadItems } from '../reducers/calendar';
import MapScreen from '../screens/MapScreen'; //modified

export default compose(
  connect(
    state => ({
    }),
  ),
)(MapScreen); //modified
