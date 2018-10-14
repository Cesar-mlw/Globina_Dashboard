import { connect } from 'react-redux'
import { checkData } from '../actions/Login'
import Login from '../components/Login'
const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onSubmit: () => dispatch(checkData(document.getElementById('email').value, document.getElementById('password').value))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)