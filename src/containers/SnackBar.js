import { connect } from 'react-redux'
import Snackbar from '../components/Snackbar'
import { closeSnackBar } from '../actions/SnackBar'

const mapStateToProps = state => ({
    open: state.snackBar.open,
    message: state.snackBar.message
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(closeSnackBar())

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Snackbar)