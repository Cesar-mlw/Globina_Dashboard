import { connect } from 'react-redux'
import Snackbar from '../components/Snackbar'
import { closeSnackBar } from '../actions/SnackBar'

const mapStateToProps = state => ({
    open: state.snackbar.open,
    message: state.snackbar.message
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(closeSnackBar())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snackbar)