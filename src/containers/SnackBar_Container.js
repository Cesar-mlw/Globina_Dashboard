import { connect } from 'react-redux'
import SnackBar from '../components/SnackBar'
import { closeSnackbar } from '../actions/UI'

const mapStateToProps = state => (
    console.log(state),
    {
    open: state.snackbar.open,
    message: state.snackbar.message
})

const mapDispatchToProps = dispatch => ({
    onClick: () => dispatch(closeSnackbar()),
    onClose: () => dispatch(closeSnackbar())
})

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar)